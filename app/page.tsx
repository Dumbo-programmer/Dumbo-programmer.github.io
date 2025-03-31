import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Research from "@/components/main/Research";
import WIP from "@/components/main/WIP";
import LoadingScreen from "@/components/main/LoadingScreen";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
      <LoadingScreen />
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Research />
        <WIP />

      </div>
    </main>
  );
}
