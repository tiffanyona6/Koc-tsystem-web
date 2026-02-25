import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KOC Technical System | Soluciones técnicas de alto rendimiento industrial",
    template: "%s | KOC Technical System"
  },
  description: "Soluciones técnicas de alto rendimiento industrial. KOC Technical System se especializa en ingeniería energética, gestión eficiente del agua y control térmico avanzado para optimizar procesos industriales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased font-poppins text-gray-900 bg-white`}
      >
        <Header />
        {children}
        <ScrollToTop />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
