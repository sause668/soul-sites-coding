import type { SiteSection } from "@/app/lib/site-data";
import { AboutH } from "./AboutH";
import { SitesSectionH } from "./SitesSectionH";
import { TitleH } from "./TitleH";

type HomeProps = {
  siteDataExp: SiteSection;
  siteData: SiteSection;
};

export function Home({ siteDataExp, siteData }: HomeProps) {
  return (
    <>
      <TitleH />
      <div id="sites">
        <SitesSectionH section={siteDataExp} />
        <SitesSectionH section={siteData} />
      </div>
      <AboutH />
    </>
  );
}
