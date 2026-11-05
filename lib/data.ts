export type Category = {
  slug: string;
  name: string;
  description: string;
  emoji: string;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  categorySlug: string;
  shortDescription: string;
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  tags: string[];
  imageGradient: string;
};

export const categories: Category[] = [
  {
    slug: "men",
    name: "مردانه",
    description: "پیراهن، شلوار، کت و استایل روزمره",
    emoji: "👔",
  },
  {
    slug: "women",
    name: "زنانه",
    description: "مانتو، بلوز، دامن و لباس مجلسی",
    emoji: "👗",
  },
  {
    slug: "kids",
    name: "بچگانه",
    description: "لباس راحت و شاد برای کودکان",
    emoji: "🧒",
  },
  {
    slug: "accessories",
    name: "اکسسوری",
    description: "کیف، کمربند، شال و زیورآلات",
    emoji: "👜",
  },
];

export const products: Product[] = [
  {
    slug: "linen-shirt-beige",
    name: "پیراهن کتان کرم",
    price: 890000,
    compareAtPrice: 1050000,
    categorySlug: "men",
    shortDescription: "پارچه سبک و تنفس‌پذیر، مناسب تابستان",
    description:
      "پیراهن کتان با بافت نرم و دوخت تمیز. یقه کلاسیک و دکمه‌های محکم. برای استایل رسمی‌ـ‌نیمه‌رسمی و روزمره عالی است.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "کرم", hex: "#e8dcc8" },
      { name: "سفید", hex: "#f5f5f4" },
    ],
    tags: ["جدید", "پرفروش"],
    imageGradient: "linear-gradient(145deg, #d4c4a8 0%, #8b7355 100%)",
  },
  {
    slug: "slim-jeans-dark",
    name: "شلوار جین اسلیم مشکی",
    price: 1250000,
    categorySlug: "men",
    shortDescription: "برش اسلیم، پارچه با دوام",
    description:
      "جین با کشش ملایم برای راحتی بیشتر. رنگ مشکی یکدست که با هر استایلی ست می‌شود.",
    sizes: ["30", "32", "34", "36"],
    colors: [{ name: "مشکی", hex: "#1c1917" }],
    tags: ["پرفروش"],
    imageGradient: "linear-gradient(145deg, #44403c 0%, #0c0a09 100%)",
  },
  {
    slug: "wool-coat-camel",
    name: "کت پشمی شتر",
    price: 4200000,
    compareAtPrice: 4800000,
    categorySlug: "men",
    shortDescription: "گرم و شیک برای پاییز و زمستان",
    description:
      "کت پشمی با آستر نرم، دوخت ایتالیایی و جیب‌های کاربردی. انتخابی لوکس برای فصل سرد.",
    sizes: ["M", "L", "XL"],
    colors: [{ name: "شتر", hex: "#c4a574" }],
    tags: ["حراج"],
    imageGradient: "linear-gradient(145deg, #c9a66b 0%, #78593a 100%)",
  },
  {
    slug: "mantoo-navy",
    name: "مانتو نخی سرمه‌ای",
    price: 1680000,
    categorySlug: "women",
    shortDescription: "برش آزاد، مناسب محل کار",
    description:
      "مانتو بلند با پارچه نخی مرغوب. دکمه‌های مخفی و جیب‌های جانبی. راحت و شیک همزمان.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "سرمه‌ای", hex: "#1e3a5f" },
      { name: "زیتونی", hex: "#4d5d3a" },
    ],
    tags: ["جدید"],
    imageGradient: "linear-gradient(145deg, #3d5a80 0%, #1e293b 100%)",
  },
  {
    slug: "silk-blouse-rose",
    name: "بلوز ابریشم گل‌گلی",
    price: 980000,
    categorySlug: "women",
    shortDescription: "لمس نرم، مناسب مهمانی",
    description:
      "بلوز سبک با طرح گل‌گلی ظریف. یقه V و آستین بلند. با شلوار رسمی یا جین زیبا دیده می‌شود.",
    sizes: ["S", "M", "L"],
    colors: [{ name: "گل‌گلی", hex: "#e8b4b8" }],
    tags: [],
    imageGradient: "linear-gradient(145deg, #f5c6cb 0%, #c97882 100%)",
  },
  {
    slug: "pleated-skirt-black",
    name: "دامن پلیسه مشکی",
    price: 720000,
    categorySlug: "women",
    shortDescription: "کلاسیک و همیشه مد",
    description: "دامن میانی با چین‌های منظم. کمربند باریک همراه محصول. برای استایل اداری و شبانه.",
    sizes: ["S", "M", "L"],
    colors: [{ name: "مشکی", hex: "#18181b" }],
    tags: ["پرفروش"],
    imageGradient: "linear-gradient(145deg, #52525b 0%, #18181b 100%)",
  },
  {
    slug: "kids-hoodie-blue",
    name: "هودی بچگانه آبی",
    price: 450000,
    categorySlug: "kids",
    shortDescription: "نرم و گرم برای بازی",
    description: "پارچه پنبه‌ای ضد حساسیت. کلاه جمع‌شونده و جیب کانگورویی. قابل شستشو در ماشین.",
    sizes: ["۴-۵ سال", "۶-۷ سال", "۸-۹ سال"],
    colors: [
      { name: "آبی", hex: "#3b82f6" },
      { name: "قرمز", hex: "#ef4444" },
    ],
    tags: ["جدید"],
    imageGradient: "linear-gradient(145deg, #93c5fd 0%, #2563eb 100%)",
  },
  {
    slug: "kids-dress-yellow",
    name: "پیراهن دخترانه زرد",
    price: 380000,
    categorySlug: "kids",
    shortDescription: "رنگ شاد برای مهمانی تولد",
    description: "پیراهن آستین کوتاه با چین‌های ظریف. بند پشت قابل تنظیم.",
    sizes: ["۳-۴ سال", "۵-۶ سال"],
    colors: [{ name: "زرد", hex: "#facc15" }],
    tags: [],
    imageGradient: "linear-gradient(145deg, #fde047 0%, #ca8a04 100%)",
  },
  {
    slug: "leather-belt-brown",
    name: "کمربند چرم طبیعی",
    price: 520000,
    categorySlug: "accessories",
    shortDescription: "چرم گاوی، سگک فلزی",
    description: "کمربند کلاسیک با عرض استاندارد. بسته‌بندی مناسب هدیه.",
    sizes: ["100", "105", "110", "115"],
    colors: [{ name: "قهوه‌ای", hex: "#78350f" }],
    tags: [],
    imageGradient: "linear-gradient(145deg, #a16207 0%, #451a03 100%)",
  },
  {
    slug: "canvas-tote",
    name: "کیف دوشی کنفی",
    price: 340000,
    compareAtPrice: 420000,
    categorySlug: "accessories",
    shortDescription: "سبک و پرجا برای روزمره",
    description: "کیف کنفی با بند پنبه‌ای. جای کافی برای لپ‌تاپ ۱۳ اینچی.",
    sizes: ["یک سایز"],
    colors: [
      { name: "کرم", hex: "#e7e5e4" },
      { name: "مشکی", hex: "#292524" },
    ],
    tags: ["حراج"],
    imageGradient: "linear-gradient(145deg, #d6d3d1 0%, #78716c 100%)",
  },
  {
    slug: "wool-scarf-gray",
    name: "شال پشمی خاکستری",
    price: 410000,
    categorySlug: "accessories",
    shortDescription: "نرم و گرم، رنگ خنثی",
    description: "شال بلند پشم مرینو. مناسب مردانه و زنانه.",
    sizes: ["یک سایز"],
    colors: [{ name: "خاکستری", hex: "#9ca3af" }],
    tags: ["پرفروش"],
    imageGradient: "linear-gradient(145deg, #e5e7eb 0%, #6b7280 100%)",
  },
  {
    slug: "cotton-tee-white",
    name: "تی‌شرت پنبه‌ای سفید",
    price: 290000,
    categorySlug: "men",
    shortDescription: "پایه هر کمد لباسی",
    description: "پنبه ۱۰۰٪، برش regular fit. مناسب لایه‌چینی زیر کت یا تنها.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "سفید", hex: "#fafafa" },
      { name: "مشکی", hex: "#171717" },
    ],
    tags: [],
    imageGradient: "linear-gradient(145deg, #fafafa 0%, #d4d4d4 100%)",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function formatPrice(toman: number): string {
  return new Intl.NumberFormat("fa-IR").format(toman) + " تومان";
}
