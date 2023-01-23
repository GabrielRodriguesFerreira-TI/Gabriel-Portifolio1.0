import Head from "next/head";
import { Inter } from "@next/font/google";
import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WorkTips from "@/components/WorkTips";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  socials,
  projects,
}: Props) {
  return (
    <>
      <div className="bg-black text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7F5AF0]/60">
        <Head>
          <title>Gabriel - Portfolio</title>
          <link rel="icon" href="/favicon.svg" />
        </Head>

        <Header socials={socials} />

        <div className="sticky top-3 ml-3">
          <p className="ml-2 text-3xl">
            G<span className="text-violet-500">P</span>
          </p>
        </div>

        <section className="snap-start" id="hero">
          <Hero pageInfo={pageInfo} />
        </section>

        <section id="sobre" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>

        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>

        <section id="work" className="snap-start">
          <WorkTips />
        </section>

        <section id="projetos" className="snap-start">
          <Projects projects={projects} />
        </section>

        <section id="contato" className="snap-start">
          <Contact pageInfo={pageInfo}/>
        </section>
      </div>
    </>
  );
}

const config = {
  projectId: "a60wnzaz",
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: "2022-11-16",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await sanityClient.fetch(
    `*[_type == "pageInfo"][0]`
  );
  const experiences: Experience[] = await sanityClient.fetch(
    `  *[_type == "pageInfo"] {
      ...,
      technologies[]->
    }`
  );
  const skills: Skill[] = await sanityClient.fetch(`*[_type == "skill"]`);
  const projects: Project[] = await sanityClient.fetch(`*[_type == "project"] {
    ...,
    technologies[]->
  }`);
  const socials: Social[] = await sanityClient.fetch(`*[_type == "social"]`);

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 30,
  };
};
