import { AboutBrand } from "@/components/AboutBrand";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <FAQ />
        <AboutBrand />
      </main>
      <Footer />
    </>
  );
}
