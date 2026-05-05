import type { SiteSection } from "@/app/lib/site-data";
import Image from "next/image";
import Link from "next/link";

type SitesSectionHProps = {
  section: SiteSection;
};

export function SitesSectionH({ section }: SitesSectionHProps) {
  return (
    <section
      className="bg-screen-grey py-8"
      aria-labelledby={`sites-heading-${section.title.replace(/\s+/g, "-")}`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        <div className="mb-6 flex justify-center py-2">
          <div className="rounded-[10px] bg-white px-4 py-3 shadow-[0_0_5px_grey]">
            <h2
              id={`sites-heading-${section.title.replace(/\s+/g, "-")}`}
              className="text-center font-title text-3xl text-primary underline decoration-2"
            >
              {section.title}
            </h2>
          </div>
        </div>
        <ul className="flex w-full flex-col gap-6 pb-4">
          {section.data.map((site) => (
            <li key={site.id} className="flex justify-center">
              <article className="flex w-full max-w-5xl flex-col gap-4 rounded-[10px] bg-screen-white p-2 shadow-[0_0_5px_grey] md:flex-row md:items-stretch md:justify-between md:gap-4">
                <div className="flex w-full flex-col items-center gap-2 md:w-[40%]">
                  <Link
                    href={site.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overflow-hidden rounded-[10px] shadow-[0_0_2px_grey]"
                  >
                    <Image
                      src={site.img}
                      alt=""
                      width={1440}
                      height={750}
                      priority={site.id === "soulAcademy"}
                      className="h-auto w-full rounded-[10px] object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </Link>
                  <Link
                    href={site.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 hidden rounded bg-primary px-4 py-2 font-subtitle text-secondary hover:opacity-90 min-[769px]:inline-block"
                  >
                    View Site
                  </Link>
                </div>
                <div className="flex w-full flex-col justify-center px-4 py-2 md:w-[60%] md:items-start">
                  <h3 className="font-subtitle text-2xl text-primary md:text-3xl">
                    {site.title}
                  </h3>
                  <p className="mt-1 font-subtitle text-lg text-primary md:text-xl">
                    {site.dis}
                  </p>
                  <p className="mt-4 font-body text-base leading-relaxed text-primary md:text-lg">
                    {site.dis2}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
