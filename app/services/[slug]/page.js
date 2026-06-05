import ServiceDetailLoader from "@/components/ServicesTab/ServiceDetailLoader";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export default async function Page({ params }) {
  const { slug } = await params;
  return <ServiceDetailLoader slug={slug} />;
}
