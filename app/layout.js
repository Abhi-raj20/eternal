import { Brygada_1918, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const brygada = Brygada_1918({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-brygada",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Knowles | Super Prime Construction",
  description:
    "Knowles is a super-prime construction contractor who build and deliver some of the finest homes across London and the Home Counties.",
  metadataBase: new URL("https://knowles.uk.com"),
  openGraph: {
    title: "Knowles | Super Prime Construction",
    description:
      "Knowles is a super-prime construction contractor who build and deliver some of the finest homes across London and the Home Counties.",
    url: "https://knowles.uk.com/",
    siteName: "Knowles",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={`${brygada.variable} ${inter.variable}`}>
      <body>
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
