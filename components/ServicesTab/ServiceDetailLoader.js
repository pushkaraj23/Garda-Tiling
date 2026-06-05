"use client";

import { useRouter } from "next/navigation";
import ServiceDetail from "./ServiceDetailPage";
import { useService } from "@/lib/cms/useServices";

export default function ServiceDetailLoader({ slug }) {
  const router = useRouter();
  const { service, loading } = useService(slug);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <p className="font-manrope text-text-muted text-sm">Loading service…</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-bebas text-4xl mb-4">SERVICE NOT FOUND</h1>
          <button
            type="button"
            onClick={() => router.push("/services")}
            className="px-6 py-3 bg-primary text-white rounded-xl font-manrope"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return <ServiceDetail service={service} />;
}
