import ProjectList from "@/components/project/ProjectList";

export const dynamic = "force-dynamic";

export default function ProjectPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ProjectList />
    </main>
  );
}
