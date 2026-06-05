import ProjectDetailLoader from "@/components/project/ProjectDetailLoader";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export default async function Project({ params }) {
  const { slug } = await params;
  return <ProjectDetailLoader slug={slug} />;
}
