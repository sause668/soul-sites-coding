import Image from "next/image";

const SKILL_ICONS: { name: string; src: string; external?: boolean }[] = [
  { name: "TypeScript", src: "/img/icons/typescript.png" },
  {
    name: "Node.js",
    src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
    external: true,
  },
  {
    name: "React.js",
    src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
    external: true,
  },
  {
    name: "Next.js",
    src: "https://github.com/user-attachments/assets/7016efe1-f0fd-4b78-b0cb-db431926ec0d",
    external: true,
  },
  { name: "PrismaORM", src: "/img/icons/prisma.png" },
  {
    name: "Postgres",
    src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png",
    external: true,
  },
  {
    name: "Tailwind",
    src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png",
    external: true,
  },
  { name: "Cursor", src: "/img/icons/cursor.png" },
  {
    name: "GitHub",
    src: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
    external: true,
  },
  {
    name: "Docker",
    src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png",
    external: true,
  },
];

export function TitleH() {
  return (
    <section
      id="title"
      className="bg-primary pb-6 pt-2 text-secondary"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-6">
        <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:gap-8">
          <div className="flex justify-center">
            <Image
              src="/img/logos/logo-main-inverted.jpg"
              alt=""
              width={291}
              height={502}
              priority
              className="h-auto w-[45%] max-w-[131px] min-[400px]:max-w-[196px] min-[600px]:max-w-[273px] lg:max-w-[328px]"
              sizes="(max-width: 400px) 131px, (max-width: 600px) 196px, (max-width: 1100px) 273px, 328px"
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center lg:items-center">
            <h1
              id="hero-heading"
              className="font-title text-4xl min-[600px]:text-5xl lg:text-6xl"
            >
              Soul Sites
            </h1>
            <p className="mt-2 font-subtitle text-2xl min-[600px]:text-3xl lg:text-4xl">
              Soul Never Dies
            </p>
          </div>
        </div>
        <div
          className="mt-4 flex flex-wrap items-center justify-center gap-2 rounded-[20px] bg-screen-white p-3"
          title="Tools and technologies"
        >
          {SKILL_ICONS.map((icon) =>
            icon.external ? (
              // eslint-disable-next-line @next/next/no-img-element -- remote topic icons; sizes vary
              <img
                key={icon.name}
                src={icon.src}
                width={32}
                height={32}
                alt=""
                className="h-8 w-8 object-contain"
                title={icon.name}
              />
            ) : (
              <Image
                key={icon.name}
                src={icon.src}
                width={32}
                height={32}
                alt=""
                title={icon.name}
                className="h-8 w-8 object-contain"
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
