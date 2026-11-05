import Link from "next/link";
import { formatPrice, type Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="product-card">
      <div
        className="product-image"
        style={{ background: product.imageGradient }}
        aria-hidden
      >
        {product.tags.length > 0 && (
          <div className="product-tags">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className={`tag ${tag === "حراج" ? "tag-sale" : tag === "جدید" ? "tag-new" : ""}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="product-body">
        <h3>{product.name}</h3>
        <p className="short">{product.shortDescription}</p>
        <div className="price-row">
          <span className="price">{formatPrice(product.price)}</span>
          {product.compareAtPrice != null && (
            <span className="price-old">{formatPrice(product.compareAtPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
