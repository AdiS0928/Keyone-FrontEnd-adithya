import type { Metadata } from "next";
import Header from '@/components/custom/navigations/header/Header';
import Footer from '@/components/custom/navigations/footer/Footer';
import GlobalProvider from '@/components/providers/GlobalProvider';
import ToTop from '@/components/custom/navigations/ToTop/ToTop';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Key One Holiday Homes',
  description: 'We are delighted to invite you to our Valeema celebration on the evening of Friday, February 21, 2025, at the Lazzat Banquet Hall. Let’s make memories together!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <Header />
          {children}
          <ToTop />
          <Footer/>
        </GlobalProvider>
      </body>
    </html>
  );
}