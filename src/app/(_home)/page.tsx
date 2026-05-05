import { Home } from "@/app/(_home)/_components/Home/Home";
import { siteData, siteDataExp } from "@/app/lib/site-data";

export default function HomePage() {
  return <Home siteDataExp={siteDataExp} siteData={siteData} />;
}
