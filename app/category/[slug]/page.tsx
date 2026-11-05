import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { categories, getCategory, getProductsByCategory } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "دسته یافت نشد" };
  return {
    title: `${category.name} | مُدخانه`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const list = getProductsByCategory(slug);

  return (
    <main className="container" style={{ paddingTop: "1.5rem", paddingBottom: "2rem" }}>
      <Breadcrumb
        items={[
          { label: "خانه", href: "/" },
          { label: category.name },
        ]}
      />
      <header className="page-header">
        <h1>
          {category.emoji} {category.name}
        </h1>
        <p>{category.description}</p>
        <p style={{ fontSize: "0.85rem", color: "#78716c", marginTop: "0.5rem" }}>
          {list.length} محصول
        </p>
      </header>

      {list.length === 0 ? (
        <p className="empty-state">فعلاً محصولی در این دسته ثبت نشده است.</p>
      ) : (
        <div className="product-grid">
          {list.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
