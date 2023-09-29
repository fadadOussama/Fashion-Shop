import Hero from "@/components/Hero";
import ProductGuide from "@/components/ProductGuide";
import ProductVarierty from "@/components/ProductVarierty";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductGuide />
      <ProductVarierty />
    </div>
  );
}
