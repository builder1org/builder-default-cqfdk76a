import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "مُدخانه | فروشگاه لباس",
  description: "خرید لباس مردانه، زنانه، بچگانه و اکسسوری با دسته‌بندی و صفحه محصول",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
