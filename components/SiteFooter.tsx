export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p style={{ fontWeight: 600, color: "#44403c" }}>مُدخانه — نسخه اولیه</p>
        <p>ارسال به سراسر کشور · پشتیبانی واتساپ · بازگشت تا ۷ روز</p>
        <p style={{ fontSize: "0.8rem", marginTop: "1rem" }}>
          © {new Date().getFullYear()} تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
