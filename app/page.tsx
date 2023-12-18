import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[4rem] mx-auto h-full max-w-5xl">
        <About />
        <Contact />
      </main>
    </>
  );
}
