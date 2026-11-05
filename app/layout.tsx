import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "مُدخانه | فروشگاه لباس",
  description: "خرید لباس مردانه، زنانه، بچگانه و اکسسوری با دسته‌بندی و صفحه محصول",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ fontFamily: "Tahoma, 'Segoe UI', system-ui, sans-serif" }}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
