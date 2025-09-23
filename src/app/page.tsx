import Hero from "@/components/sections/Hero";
import Pets from "@/components/sections/Pets";
import WhyAdopt from "@/components/sections/WhyAdopt";
import ScrollContext from "@/contexts/ScrollContext";


export default function Home() {

  return (
    <ScrollContext>
      <main className="h-screen w-full">
        <Hero />
        <WhyAdopt />
        <Pets />
      </main>
    </ScrollContext>
  );
}
