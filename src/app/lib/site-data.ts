export type SiteEntry = {
  id: string;
  img: string;
  title: string;
  dis: string;
  dis2: string;
  link: string;
};

export type SiteSection = {
  title: string;
  data: SiteEntry[];
};

export const siteDataExp: SiteSection = {
  title: "Freelance Experience",
  data: [
    {
      id: "sewposh",
      img: "/img/sites/sew-posh.png",
      title: "Sew Posh",
      dis: "Website for Upholstery Company",
      dis2:
        "A Next.js marketing and gallery site for Sew Posh Design and Upholstery, showcasing project categories (for example dining sets, cushions, sofas, and boat upholstery), reviews, and about content, with clear paths to book or contact the business.",
      link: "https://sew-posh.vercel.app",
    },
    {
      id: "ballersLab",
      img: "/img/sites/ballers-lab-2.png",
      title: "Ballers Lab League",
      dis: "Website for Women's Basketball League",
      dis2:
        "A full-stack league hub for a Women's Basketball League: public schedule, game days, matchups, team and player stats, league rules and history, and photo galleries, with an authenticated admin area for managing the season. Built with a Flask backend and React (Vite) on the front end.",
      link: "https://www.ballerslableague.com/",
    },
  ],
};

export const siteData: SiteSection = {
  title: "Recent Projects",
  data: [
    {
      id: "soulAcademy",
      img: "/img/sites/soul-academy-3.png",
      title: "Soul Academy",
      dis: "School Portal for Class Management",
      dis2:
        "A full-stack school operations app for teachers, students, and admins: courses and gradebooks, assignments, behavior notes, groups, family relationships, scheduling, and announcements—with role-based dashboards after secure login. Stack highlights: Next.js (App Router, Server Actions), Prisma, PostgreSQL, Zod, Tailwind, and JWT sessions in HTTP-only cookies.",
      link: "https://soul-academy.vercel.app/",
    },
    {
      id: "soulmath",
      img: "/img/sites/soul-math-2.png",
      title: "Soul Math",
      dis: "Practice Assessments for Middle School Math",
      dis2:
        "A Next.js + Material UI learning site positioned as a middle school math platform: grade-level topic pages plus interactive tools such as a calculator and quiz-style practice.",
      link: "https://soul-math.vercel.app",
    },
    {
      id: "frontendBasics",
      img: "/img/sites/frontend-basics-2.png",
      title: "Front End Basics",
      dis: "Reference for Beginner Web Developers",
      dis2:
        "A Next.js reference site for core web fundamentals—HTML, CSS, JavaScript, and the DOM—organized for quick lookup with short explanations and examples while you study or build.",
      link: "https://front-end-basics.vercel.app",
    },
  ],
};
