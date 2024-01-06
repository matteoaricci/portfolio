import Card from "@/components/Card"

export default function Projects() {
  return (
    <section id="projects-section" className="px-5 pt-5">
      <h1 className="text-5xl font-bold pt-8 mb-4">Projects.</h1>
      <Card />
    </section>
  );
}


const projectData: {title: string, description: string, image?: string}[] = [
    
]