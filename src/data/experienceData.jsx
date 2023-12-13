/** @format */
import Gallify from "../assets/gallify/gallify.webp";
import Antra from "../assets/antra/antra-logo.webp";
import Lengineer from "../assets/Lengineer/Lengineer.webp";
import Wisconsin from "../assets/wisconsin/Wisconsin.webp";
export const experienceData = [
  {
    title: "Java Developer",
    type: "Professional",
    organization: "Antra, Inc",
    date: "Oct 2022 - June 2023",
    description: [
      "Contributed to the development of the Internal Antra-LMS system.",
      "Specifically, took charge of building and optimizing the Course Page and User Profile sections of the site, resulting in a seamless user experience.",
      "Employed microservices architectural design and technologies to enhance system efficiency.",
      "Demonstrated the ability to fetch and seamlessly integrate data from backend servers, enhancing data accessibility and real-time functionality.",
      "Implemented a rigorous unit testing regimen using Junit to ensure code quality and functionality.",
      "Leveraged Docker containerization for source code updates and successfully deployed changes to Kubernetes.",
      "Integrated with a robust CI/CD pipeline built with Jenkins, streamlining the deployment process and ensuring rapid updates and testing.",
    ],
    icon: (
      <img
        src={Antra}
        alt="Antra Icon"
        style={{ width: "100%", borderRadius: "50%" }}
      />
    ),
    textColor: "#5DA8BA",
  },
  {
    title: "Serverless Software Engineer",
    type: "Volunteer",
    organization: "Gallify LLC",
    date: "July 2021 - July 2022",
    description: [
      "Implemented user authentication system using Swift and Firebase Authentication.",
      "Developed data models.",
      "Created CRUD methods for various components of the application using asynchronous database queries to Cloud Firestore.",
      "Created REST endpoints to send and receive HTTPS requests to Gallify Marketplace website.",
      "Stress-tested new features before merging with existing code.",
      "Used Git and GitHub for version control.",
      "Followed Scrum SDLC process to develop features and launch Beta versions of the application.",
      "Attended weekly standup meetings for progress discussion and sprint planning.",
      "Provided weekly project updates to team lead, brainstormed new ideas for important features, created and updated tickets using Projects on GitHub and detailed potential bug fixes.",
    ],
    icon: (
      <img
        src={Gallify}
        alt="Gallify Icon"
        style={{ width: "100%", borderRadius: "50%" }}
      />
    ),
    textColor: "#B95C84",
  },
  {
    title: "Web Developer Intern",
    type: "Co-op",
    organization: "LeNgineer",
    date: "Feb 2022 - May 2022",
    description: [
      "Built backend hooks and a REST API using Express JS for Yellow Eye (A school management app).",
      "Used MongoDB Compass for Database.",
      "Created UI and frontend logic using React in Node JS and other libraries like Redux and Material UI.",
      "Collaborated with Supervisor to break down best possible solutions for implementing new features.",
      "Used Git for version control.",
      "Used Trello to keep track of new developments in code and create task-specific tickets.",
      "Collaborated with team members for debugging and testing purposes.",
    ],
    icon: (
      <img
        src={Lengineer}
        alt="Lengineer Icon"
        style={{ width: "100%", borderRadius: "50%" }}
      />
    ),
    textColor: "#6588BD",
  },
  {
    title: "Full Stack Developer/Scrum Master",
    type: "Capstone",
    organization: "UW-Madison",
    date: "Sep 2021 - Dec 2021",
    description: [
      "Utilized Google Design Sprint methodology to define the problem statement and design a prototype.",
      "Conducted interviews with potential customers, end-users, and target groups to comprehensively understand user requirements.",
      "Presented user stories and initial mock-ups/prototypes to Product Owners, mentors, and interviewees.",
      "Employed Lean Startup methodologies to craft the unique value proposition of our solution and address key questions on a lean canvas.",
      "Learnt to use Jira software to plan and execute Scrum sprints.",
      "Developed frontend and backend logic for multiple screens in React Native and TypeScript.",
      "Seamlessly integrated Redux storage with Firestore for data management.",
    ],
    icon: (
      <img
        src={Wisconsin}
        alt="Wisconsin Icon"
        style={{ width: "100%", borderRadius: "50%" }}
      />
    ),
    textColor: "#8C5348",
  },
  {
    title: "Full Stack Developer / Project Owner",
    type: "Course Project",
    organization: "Software Engineering @ UW-Madison",
    date: "Sep 2021 - Dec 2022",
    description: [
      "Initiated the project by proposing app idea that made it amongst shortlisted projects for implementation.",
      "Actively served as a Backend Software Engineer throughout the project's duration.",
      "Designed and built backend CRUD functions for all components, creating a robust ExpressJS API.",
      "Utilized MongoDB Atlas for efficient data persistence.",
      "Made contributions to frontend logic and user interface using React Native and TypeScript.",
      "Contributed to frontend Hooks, components, and styling aspects, ensuring a polished and user-friendly experience.",
      "Collaborated closely with end-users to develop comprehensive user acceptance test cases.",
      "Employed the React Native Async-storage library for the secure storage of users' private health data on their devices.",
      "Employed an Agile (Extreme) Waterfall Process to design, build, and rigorously test the application.",
    ],
    icon: (
      <img
        src={Wisconsin}
        alt="Wisconsin Icon"
        style={{ width: "100%", borderRadius: "50%" }}
      />
    ),
    textColor: "#4B3136",
  },
];
