import About from "@/components/About/About";
import CmsPageIntro from "@/components/cms/CmsPageIntro";

export default function AboutPage() {
  return (
    <div className="">
      <CmsPageIntro slug="about" fallbackTitle="About Garda Tiling" />
      <About/>
    </div>
  )
}
