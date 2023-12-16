import About from "@/components/About";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[4rem] h-full">
        <About />
      </main>
    </>
  );
}
