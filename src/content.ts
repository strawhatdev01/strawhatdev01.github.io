export const email = "muskafahmad2@gmail.com";
export const phone = "+234 810 246 6270";
export const phoneHref = "tel:+2348102466270";
export const linkedin = "https://www.linkedin.com/in/musa-ahmad-698473187";
export const github = "https://github.com/strawhatdev01";

export const projects = [
  {
    name: "Close",
    year: "2026",
    title: "Close of day for a dispatch desk.",
    summary:
      "A Lagos desk ends the shift still guessing which rider is holding the company's cash. Close is the phone they keep at the counter. The morning list goes out on WhatsApp. Each drop comes back as cash or transfer. At the end of the day the shortage is one number. If the network drops, the books stay on the device.",
    stack: ["React", "TypeScript", "Vite"],
    links: [
      { label: "Live demo", href: "https://strawhatdev01.github.io/close/" },
      { label: "Source", href: "https://github.com/strawhatdev01/close" },
    ],
  },
  {
    name: "GiveForward",
    year: "2026",
    title: "Donations with a receipt and a record.",
    summary:
      "People in Nigeria fund wells, school fees, and community rebuilds, and they rarely get a clear record of where the money went. GiveForward is a phone-first place to give to verified causes. Nomba takes the payment, including a virtual account for each cause. Resend sends the receipt. An admin opens a campaign and watches the donations land. Built for the DevCareer × Nomba Hackathon.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Nomba", "Resend"],
    links: [
      { label: "Live site", href: "https://giveforward.vercel.app" },
      { label: "Source", href: "https://github.com/strawhatdev01/giveforward" },
    ],
  },
] as const;

export const earlier = [
  {
    name: "MasyEmpire",
    detail:
      "An e-commerce platform with accounts, product search, payments, and an admin dashboard.",
  },
  {
    name: "Forex analysis",
    detail:
      "A Python desktop tool for forex data, using pandas, scikit-learn, and PyQt5.",
  },
] as const;

export const roles = [
  {
    title: "Software Developer",
    org: "NCAT",
    place: "Zaria, Nigeria",
    dates: "Jan 2024 – 2025",
    points: [
      "Led desktop applications for communications, on air and on land.",
      "Reviewed code and mentored three junior developers.",
      "Client satisfaction on the delivered work reached 95%.",
    ],
  },
  {
    title: "Junior Developer Intern",
    org: "PROFELLA",
    place: "",
    dates: "Jun 2018 – Dec 2020",
    points: [
      "Built REST APIs in Python and Flask, on the order of a hundred requests a day.",
      "Contributed through Git and peer review.",
      "Covered the APIs with Postman tests, about 85% of the surface.",
    ],
  },
] as const;

export const study = [
  {
    credential: "B.Sc. Computer Science",
    school: "Ahmadu Bello University, Zaria",
    dates: "2024 – 2026",
    note: "In progress",
  },
  {
    credential: "Diploma in Computer Science",
    school: "Ahmadu Bello University, Zaria",
    dates: "2019 – 2021",
    note: "Completed",
  },
  {
    credential: "SoloLearn",
    school: "Independent coursework",
    dates: "2019",
    note: "Certificate",
  },
] as const;

export const skills = [
  { label: "Languages", items: "JavaScript, Python, HTML & CSS, C#, PHP" },
  { label: "Interfaces", items: "React, Next.js, Tailwind CSS" },
  { label: "Services", items: "Node.js, Express, Django, Flask" },
  { label: "Data", items: "PostgreSQL, MongoDB, Firebase" },
  { label: "Practice", items: "Git, Docker, GitHub Actions, Postman" },
] as const;
