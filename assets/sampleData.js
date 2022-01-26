import logoFile from "./logoFile";
export const sampleData = [
  {
    id: 1,
    name: "Apple",
    logo: logoFile.appleLogo,
    title: "Data Engineer",
    category: "Data",
    listed: "1 minute ago",
    techStacks: [
      {
        id: 1,
        tech: "Oracle",
      },
      {
        id: 2,
        tech: "HDFS",
      },
      {
        id: 3,
        tech: "Hive",
      },
      {
        id: 4,
        tech: "Spark",
      },
      {
        id: 5,
        tech: "yarn",
      },
      {
        id: 6,
        tech: "npm",
      },
    ],
  },
  {
    id: 2,
    name: "Binance",
    logo: logoFile.binanceLogo,
    title: "Backend Service Developer",
    category: "Backend",
    listed: "2 minutes ago",
    techStacks: [
      {
        id: 1,
        tech: "Spring",
      },
      {
        id: 2,
        tech: "Java",
      },
    ],
  },
  {
    id: 3,
    name: "Goldman Sachs",
    title: "Full Stack Developer(Data Modelling)",
    logo: logoFile.goldmanSachsLogo,
    category: "Full Stack",
    listed: "3 minutes ago",
    techStacks: [
      {
        id: 1,
        tech: "Analytics",
      },
      {
        id: 2,
        tech: "UDB",
      },
      {
        id: 3,
        tech: "ORM",
      },
      {
        id: 4,
        tech: "Apache",
      },
      {
        id: 5,
        tech: "React",
      },
      {
        id: 6,
        tech: "Native",
      },
    ],
  },
];

export default sampleData;
