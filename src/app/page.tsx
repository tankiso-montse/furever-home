import Hero from "@/components/sections/Hero";
import Pets from "@/components/sections/Pets";
import WhyAdopt from "@/components/sections/WhyAdopt";


export default function Home() {
  return (
    <main className="h-screen w-full">
      <Hero />
      <WhyAdopt />
      <Pets />
    </main>
  );
}
