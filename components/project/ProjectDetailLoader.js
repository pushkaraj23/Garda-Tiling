"use client";

import { useRouter } from "next/navigation";
import ProjectDetail from "./ProjectDetail";
import { useProject } from "@/lib/cms/useProject";
import { useProjects } from "@/lib/cms/useProjects";

export default function ProjectDetailLoader({ slug }) {
  const router = useRouter();
  const { project, loading } = useProject(slug);
  const { projects: allProjects, loading: listLoading } = useProjects();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ffffff] pt-24">
        <p className="font-manrope text-text-muted text-sm">Loading project…</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ffffff] pt-24">
        <div className="text-center">
          <h1 className="font-bebas text-4xl text-[#111827] mb-4">PROJECT NOT FOUND</h1>
          <button
            type="button"
            onClick={() => router.push("/projects")}
            className="px-6 py-3 bg-[#2563eb] text-white rounded-xl font-semibold font-manrope"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const relatedProjects = (listLoading ? [] : allProjects)
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return <ProjectDetail project={project} relatedProjects={relatedProjects} />;
}
