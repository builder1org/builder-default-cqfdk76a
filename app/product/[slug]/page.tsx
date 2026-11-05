import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import {
  formatPrice,
  getCategory,
  getProduct,
  getProductsByCategory,
  products,
} from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "محصول یافت نشد" };
  return {
    title: `${product.name} | مُدخانه`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.categorySlug);
  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <main className="container" style={{ paddingTop: "1.5rem", paddingBottom: "2rem" }}>
      <Breadcrumb
        items={[
          { label: "خانه", href: "/" },
          ...(category
            ? [{ label: category.name, href: `/category/${category.slug}` }]
            : []),
          { label: product.name },
        ]}
      />

      <article className="product-detail">
        <div
          className="product-detail-image"
          style={{ background: product.imageGradient }}
          role="img"
          aria-label={product.name}
        />

        <div className="product-detail-info">
          {product.tags.length > 0 && (
            <div className="option-chips" style={{ marginBottom: "0.75rem" }}>
              {product.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1>{product.name}</h1>
          <p className="lead">{product.shortDescription}</p>
          <div className="price-row" style={{ marginBottom: "1.25rem" }}>
            <span className="price" style={{ fontSize: "1.25rem" }}>
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice != null && (
              <span className="price-old">{formatPrice(product.compareAtPrice)}</span>
            )}
          </div>

          <p className="option-label">سایز</p>
          <div className="option-chips">
            {product.sizes.map((size) => (
              <span key={size} className="chip">
                {size}
              </span>
            ))}
          </div>

          <p className="option-label">رنگ</p>
          <div className="option-chips">
            {product.colors.map((c) => (
              <span key={c.name} className="chip color-dot">
                <span className="color-swatch" style={{ background: c.hex }} aria-hidden />
                {c.name}
              </span>
            ))}
          </div>

          <button type="button" className="btn-primary">
            افزودن به سبد خرید
          </button>
          <p style={{ fontSize: "0.8rem", color: "#78716c", marginTop: "0.75rem" }}>
            دکمه سبد خرید در نسخه بعدی فعال می‌شود — فعلاً فقط نمایشی است.
          </p>

          <div className="description-block">
            <h2>توضیحات</h2>
            <p style={{ margin: 0 }}>{product.description}</p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <>
          <h2 className="section-title">محصولات مرتبط</h2>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </>
      )}

      {category && (
        <Link href={`/category/${category.slug}`} className="btn-secondary">
          بازگشت به {category.name}
        </Link>
      )}
    </main>
  );
}
