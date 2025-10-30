// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import ptu_logo from './assets/education_logo/ptu_logo.gif';
import hpu_logo from './assets/education_logo/hpu_logo.png';
import hp_logo from './assets/education_logo/hp_logo.png';
import lpu_logo from './assets/education_logo/lpu_logo.jpeg';
import SPPU_logo from './assets/education_logo/SPPU_logo.png';

// Project Section Logo's
import project1 from './assets/work_logo/project1.jpeg';
import project2 from './assets/work_logo/project2.jpeg';
import expenseTracker from './assets/work_logo/expenseTracker.jpeg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


export const education = [
  {
    id: 0,
    img: ptu_logo,
    school: "Pujab Technical University",
    date: "Sept 2010- Sept 2011",
    grade: "70.09 %",
    desc: "",
    degree: "Master of Computer Applications - MCA",
  },
    {
    id: 1,
    img: lpu_logo,
    school: "Lovely Professional University",
    date: "Aug 2008 - Aug 2010",
    grade: "7.00 CGPA",
    desc:"",
    degree: "Master of Computer Science - MSc",
  },
    {
    id: 2,
    img: SPPU_logo,
    school: "Savitribai Phule Pune University",
    date: "Sept 2019 - April 2021",
    grade: "9.4 CGPA",
    desc: "",
    degree: "Bachelor of Education - B.Ed",
  },
  {
    id: 1,
    img: hpu_logo,
    school: "Bachelor of Science ",
    date: "March 2006 - March 2008",
    grade: "50.2%",
    desc: "",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    img: hp_logo,
    school: "Govt. Sen. Sec School,Sarkaghat",
    date: "June 2003 - Sept 2005",
    grade: "60.05%",
    desc: "",
    degree: "Himachal Pradesh Board",
  },
  {
    id: 3,
    img: hp_logo,
    school: "Himalayan Public School,Sarkaghat",
    date: "March 2003",
    grade: "72%",
    desc: "",
    degree: "Himachal Pradesh Board",
  },
];

export const projects = [
  {
    id: 0,
    title: "Movie Website",
    description:
      "A responsive movie website created using HTML, CSS, and JavaScript. It allows users to browse a list of movies, view details such as cast, director, and release date, and search for specific titles. Designed with a clean layout and simple navigation.",
    image: project1,
    tags: ["HTML", "CSS","JavaScript"],
    github: "https://github.com/payalrattan/Homework-Projects/tree/main",
    webapp: "https://homework-projects.onrender.com/movieApp/",
  },
  {
    id: 1,
    title: "Meal Share App ",
    description:
      "Developed a full-stack web app for browsing and sharing meals. Built REST APIs for meals, reservations, and reviews, and used React hooks for dynamic UI updates with a clean, responsive design.",
    image: project2,
    tags: ["React", "Node.js", "Express", "MySQL"],
    github: " https://github.com/payalrattan/meal-sharing ",
    webapp: "https://mealsharing-w2lb.onrender.com/",
  },
  {
    id: 2,
    title: "Expense Tracker Web Application ",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: expenseTracker,
    tags: [" Next.js", "React", "Node.js", "Express", "MongoDB", "TypeScript "],
    github: " https://github.com/payalrattan/expense-Tracker-UI",
    webapp: "",
  }
];  