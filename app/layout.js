import { Brygada_1918, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "Eternal | Design & Build",
  description:
    "Eternal is a design and build company that creates exceptional spaces for clients across London and the Home Counties.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Eternal | Design & Build",
    description:
      "Eternal is a design and build company that creates exceptional spaces for clients across London and the Home Counties.",
    url: "http://localhost:3000/",
    siteName: "Eternal | Design & Build",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
