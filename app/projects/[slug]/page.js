import { notFound } from "next/navigation";
import ProjectDetail from "@/components/project/ProjectDetail";
import { projects } from "@/components/lib/projectData";

export default async function Project({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}