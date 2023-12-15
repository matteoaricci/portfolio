export default function Header() {
  return (
    <header className="z-[10] relativ">
      <div className=" fixed top-0 h-[4rem] w-full">
        <nav className="h-full flex justify-between px-4 py-2 border-b-[1px] border-b-black">
          <section className="flex flex-1">
            <button>About</button>
            <button>Experience</button>
            <button>Projects</button>
            <button>Contact</button>
          </section>
          <button className="font-bold uppercase text-lg">Matteo Ricci</button>
          <button className=" text-right flex-1">Menu</button>
        </nav>
      </div>
    </header>
  );
}
