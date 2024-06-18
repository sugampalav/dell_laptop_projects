import { Announcement, Footer, NavBar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Book Keeper",
  description: "The best online book store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Announcement />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
