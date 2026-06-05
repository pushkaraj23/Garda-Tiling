import Pricing from "@/components/Pricing/Pricing";
import CmsPageIntro from "@/components/cms/CmsPageIntro";

export default function PricingPage() {
  return (
    <div className="overflow-x-hidden">
      <CmsPageIntro slug="pricing" fallbackTitle="Pricing" />
      <Pricing />
    </div>
  );
}