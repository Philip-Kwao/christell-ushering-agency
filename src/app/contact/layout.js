import Head from "next/head";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800","900",]
});

const LocalBusinessStructuredData = () => (
  <Head>
    <link rel="canonical" href="/" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Christell Ushering Agency",
          "description": "Professional ushering services for events including weddings, corporate functions, and private parties.",
          "url": "/",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main St",
            "addressLocality": "Accra",
            "addressRegion": "Accra",
            "postalCode": "233",
            "addressCountry": "Ghana",
          },
          "telephone": "+23355 5357220",
        }),
      }}
    />
  </Head>
);

export const metadata = {
  title: "Contact | Christell Ushering Agency | Professional Ushering Services for All Events",
  description: "Christell Ushering Agency offers professional ushering services to elevate your event experience, whether it's a wedding, corporate event, or private party. Discover excellence in every detail.",
  keywords: ["ushering agency", "event services", "wedding ushers", "corporate event ushers", "Christell Ushering Agency"],
  openGraph: {
    title: "Contact | Christell Ushering Agency",
    description: "Professional ushering services to elevate your event experience.",
    url: "https://christell-ushering-agency.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Christell Ushering Agency",
    description: "Elevate your event experience with our professional ushering services.",
    image: "https://christell-ushering-agency.vercel.app/images/hero.png",
  },};

export default function ContactLayout({ children }) {
  return (
    <>
      <div className="">{children}</div>
    </>
  );
}
