import Link from "next/link";
import { categories } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="logo">
          مُدخانه
          <span>فروشگاه لباس</span>
        </Link>
        <nav className="nav-links" aria-label="دسته‌بندی‌ها">
          <Link href="/">خانه</Link>
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`}>
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
