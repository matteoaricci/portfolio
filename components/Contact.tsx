import {
  IconBrandLinkedin,
  IconMail,
  IconBrandGithub,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <section id="contact-section" className="px-5 pt-5">
      <h1 className="text-5xl font-bold pt-8 mb-4">Where to Find Me.</h1>
      <a
        className="text-2xl font-semibold flex items-center"
        href="mailto:matteo.a.ricci@gmail.com"
      >
        <IconMail size="2rem" />
        Email
      </a>
      <a
        className="text-2xl font-semibold flex items-center"
        href="https://www.linkedin.com/in/matteo-ricci-48b471287/"
      >
        <IconBrandLinkedin size="2rem" />
        LinkedIn
      </a>
      <a
        className="flex items-center text-2xl font-semibold"
        href="https://github.com/matteoaricci"
      >
        <IconBrandGithub size="2rem" />
        Github
      </a>
    </section>
  );
}
