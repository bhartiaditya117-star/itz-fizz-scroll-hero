import "./globals.css";

export const metadata = {
  title: "Itz Fizz — Scroll Driven Hero",
  description: "Scroll-driven hero animation assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
