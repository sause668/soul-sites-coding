"use client";

import Image from "next/image";
import Link from "next/link";

export function AboutH() {
  return (
    <section id="about" className="bg-primary py-8 text-secondary">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 py-2 text-center font-title text-3xl">Profile</h2>
        <div className="flex flex-col items-center gap-8 pb-4 md:flex-row md:items-start md:justify-center">
          <div className="flex w-full justify-center md:w-1/2">
            <Image
              src="/img/profile/profile-pic.jpg"
              alt="Kamara Reynolds"
              width={695}
              height={781}
              className="h-auto max-w-[90vw] rounded-[10px] object-contain min-[600px]:max-w-[420px] lg:max-w-[520px]"
              sizes="(max-width: 600px) 90vw, 420px"
            />
          </div>
          <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-center">
            <h3 className="font-subtitle text-2xl md:text-3xl">Kamara Reynolds</h3>
            <p className="mt-2 pb-4 font-subtitle text-xl md:text-2xl">
              Full Stack Developer
            </p>
            <div className="max-w-xl space-y-4 font-body text-base leading-relaxed md:text-lg">
              <p>
                After working in the electronics industry for 3 years and
                teaching for 4 years, I changed my career path to software
                engineering.
              </p>
              <p>
                {`Starting in 2021, I've built my skills in full stack developement
                with a focus on frontend development. My current stack uses
                full-stack Next.js, PrismaORM, and Tailwind.`}
              </p>
              <p>
                {`With the transition to AI, I've used the new technology to 10x my
                workflow. My cursor agent uses AI prompt documents (rules,
                skills, AGENTS.md) referencing sites I built with my current
                stack. This ensures that the agent is writing code similar to my
                own logic, file, and directory structure.`}
              </p>
              <p>
                I currently offer my services to local businesses. My ability to
                take raw ideas and translate them into a finished product is
                something my clients appreciate.
              </p>
              <p>
                Skills/Technologies: Node.js, React.js, Next.js, PrismaORM,
                Postgres, Tailwind, Cursor
              </p>
              <p>Languages: JavaScript, TypeScript, HTML, CSS, SQL, Python</p>
              {/* <p>
                <span className="font-semibold">Cell Number: </span>
                {`516-668-2866`}
              </p> */}
              <p>
                <span className="font-semibold">Email: </span>
                reynoldskamara@soulsitescoding.com
              </p>
            </div>
            <Link
              href="/Kamara_Reynolds_Resume.pdf"
              download
              className="mt-6 inline-flex rounded bg-secondary px-6 py-3 font-subtitle text-lg text-primary hover:opacity-90"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
