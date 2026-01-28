import { notFound } from "next/navigation";
import { servicesData } from "@/components/lib/servicesData";
import ServiceDetail from "@/components/ServicesTab/ServiceDetailPage";

export default async function Page({ params }) {
  const { slug } = await params;

  const service = servicesData.find(
    (s) => s.slug === slug
  );

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
  
}
