import ServicesList from "@/components/ServicesTab/ServicesList";

export const dynamic = "force-dynamic";

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ServicesList />
    </main>
  );
}
