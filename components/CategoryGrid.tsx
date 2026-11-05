import Link from "next/link";
import { categories } from "@/lib/data";

export function CategoryGrid() {
  return (
    <div className="category-grid">
      {categories.map((cat) => (
        <Link key={cat.slug} href={`/category/${cat.slug}`} className="category-card">
          <span className="emoji" aria-hidden>
            {cat.emoji}
          </span>
          <h3>{cat.name}</h3>
          <p>{cat.description}</p>
        </Link>
      ))}
    </div>
  );
}
