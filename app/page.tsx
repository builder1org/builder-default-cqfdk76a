import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function Home() {
  const featured = products.slice(0, 8);

  return (
    <main>
      <section className="hero container">
        <h1>استایل خودت را پیدا کن</h1>
        <p>
          مجموعه‌ای از لباس‌های روزمره و مجلسی با دسته‌بندی ساده. نسخه اولیه سایت
          فروشگاه شما — برای دیدن جزئیات هر محصول روی کارت کلیک کنید.
        </p>
      </section>

      <div className="container">
        <h2 className="section-title">دسته‌بندی‌ها</h2>
        <CategoryGrid />

        <h2 className="section-title">محصولات پیشنهادی</h2>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
