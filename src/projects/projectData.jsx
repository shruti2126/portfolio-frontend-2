/** @format */
import brain from "../assets/brain2.png";
import fitU from "../assets/fitU-2.jpeg";
import antra from "../assets/antra.jpg";
import gallify from "../assets/gallify.jpg";
import {
  LoginPage,
  ProfilePage,
  ReelPage,
  LikedPage,
  ArtPlayerPage,
} from "../components/gallifyScreenshots";

import "../styles/projects.css";

import {
  cibMongodb,
  cibFirebase,
  cibReact,
  cibExpo,
  cibNodeJs,
  cibSwift,
  cibJava,
  cibSpring,
  cibTypescript,
  cibMysql,
  cibAmazonAws,
  cibXcode,
} from "@coreui/icons";

export const projectData = [
  {
    id: 1,
    title: "Badger Break",
    techStack: "MongoDB, ReactJS, ExpressJS, NodeJs, Expo",
    techStackIcons: [cibMongodb, cibReact, cibNodeJs, cibExpo],
    iconsColor: ["#118D4D", "#01D2F6", "#74AC5F", "#0B0F13"],
    description:
      "Mental Health App that allows users to locally store coping cards, chat with community members using an anonymous username and even take assessments to determine their emotional symptoms.",
    thumbnail: brain,
    teamSize: 3,
    purpose: "Software Engineering Course Project @ UW-Madison",
    Role: "Full Stack Developer/Project Owner",
    githubLink: "https://github.com/alexgoldsmith/badgermentalhealth",
    demoUrl: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nDAv6zhtark?si=jv0gz3MHdc8Zphbc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    insights: [
      {
        category: "Team",
        data: "Shruti Sharma (Full Stack/Project Owner), Ryan Gillespie (Full Stack/Scrum Master), Alex Goldsmith (QA Engineer)",
      },
      {
        category: "Learning",
        data: [
          "Gained proficiency in MongoDB, ReactJS, ExpressJS, and NodeJs.",
          "Enhanced skills in full-stack development and project ownership.",
        ],
      },
      {
        category: "Planning",
        data: [
          "Followed an Agile development process for iterative development.",
          "Collaborated with team members for effective task management and progress tracking.",
        ],
      },
      {
        category: "Developing",
        data: [
          "Actively contributed to both frontend and backend aspects of the project.",
          "Built CRUD functions and ExpressJS API for data management.",
        ],
      },
      {
        category: "Testing",
        data: [
          "Worked closely with end users to ensure the app met their needs and expectations.",
          "Implemented React Native Async-storage for data persistence on user devices.",
        ],
      },
      {
        category: "Leadership",
        data: [
          "Led the team as the project owner, coordinating and managing the development process.",
          "Made key decisions regarding the app's features and design.",
        ],
      },
      {
        category: "Problems",
        data: [
          "Faced challenges in synchronizing community board 'Like' functionality and the need for database reload.",
          "Addressed issues related to component updates not being synchronous with the database.",
        ],
      },
    ],

    otherMedia: [{}],
    CurrentIssues: [],
  },
  {
    id: 2,
    title: "fitU",
    techStack: "Firebase Auth, Cloud Firestore, ReactNative, Typescript, Expo",
    techStackIcons: [cibFirebase, cibTypescript, cibReact, cibExpo],
    iconsColor: ["#FFCA28", "#2F74C0", "#01D2F6s", "#0B0F13"],
    description:
      "Weight Loss App that uses Statistics for most effective activity tracking",
    thumbnail: fitU,
    teamSize: 5,
    purpose: "Capstone Project @ UW-Madison",
    Role: "Full Stack Developer",
    githubLink: "https://github.com/shruti2126/fitU",
    demoUrl: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wYPLqR3bxF8?si=TcLuHX1zoQMcAjl8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    insights: [
      {
        category: "Team",
        data: "Akshay Bodla, Shruti Sharma, Oliver You, Kavya Sebastian, Mengze Li",
      },
      {
        category: "Learning",
        data: [
          "Gained expertise in Firebase Authentication, Cloud Firestore, and React Native.",
          "Managed a full-stack role for a weight loss app.",
        ],
      },
      {
        category: "Planning",
        data: [
          "Utilized Google Design Sprint methodology and Lean Startup methodologies for planning and execution.",
          "Managed Scrum sprints using Jira software.",
        ],
      },
      {
        category: "Developing",
        data: [
          "Built frontend and backend logic for multiple screens in React Native and TypeScript.",
          "Integrated Redux storage with Firestore for efficient data management.",
        ],
      },
      {
        category: "Testing",
        data: [
          "Used React Native Async-storage for persisting sensitive user information on the device.",
          "Worked with end users to develop user acceptance test cases.",
        ],
      },
      {
        category: "Leadership",
        data: [
          "Served as the Scrum Master, facilitating team communication and ensuring project progress.",
          "Communicated directly with mentors from Medtronic during meetings.",
          "Facilitated brainstorming sessions for innovative solutions and problem-solving.",
        ],
      },
      {
        category: "Problems",
        data: [
          "Faced challenges integrating real-time data from Apple Health Kit with the Expo React Native app.",
          "Explored statistical models as an alternative to machine learning for weight correlation due to the steep learning curve.",
        ],
      },
    ],

    otherMedia: [{}],
    CurrentIssues: [],
  },
  {
    id: 3,
    title: "Antra Internal-LMS System",
    techStack: "Spring Boot, MySQL, AWS S3, Spring Security",
    techStackIcons: [cibSpring, cibMysql, cibJava, cibAmazonAws],
    iconsColor: ["#6AAD3D", "#255278", "#F0931C", "#F79400"],
    description: "Java Core and Advanced training website for consultants",
    thumbnail: antra,
    teamSize: 2,
    purpose: "Java Developer",
    Role: "Java Backend Developer",
    githubLink: "N/A",
    // demoUrl: { type: "video", key: "antraDemo.mp4" },
    demoUrl: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/FTmMN4_Jl04?si=NTdZl-kn1EZT8vnK"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    insights: [
      {
        category: "Team",
        data: "Shruti Sharma, Dawei Zhuang",
      },
      {
        category: "Learning",
        data: [
          "Played a pivotal role in the development of the Internal Antra-LMS system.",
          "Specifically, took charge of building and optimizing the Course Page and User Profile sections of the site, resulting in a seamless user experience.",
          "Employed microservices architectural design and technologies to enhance system efficiency.",
          "Demonstrated the ability to fetch and seamlessly integrate data from backend servers, enhancing data accessibility and real-time functionality.",
          "Implemented a rigorous unit testing regimen using Junit to ensure code quality and functionality.",
          "Leveraged Docker containerization for source code updates and successfully deployed changes to Kubernetes.",
          "Integrated with a robust CI/CD pipeline built with Jenkins, streamlining the deployment process and ensuring rapid updates and testing.",
        ],
      },
      {
        category: "Planning",
        data: [
          "Collaborated with the team to plan and execute development projects.",
          "Utilized project management tools for tracking progress and creating and updating tickets.",
        ],
      },
      {
        category: "Developing",
        data: [
          "Implemented features, including Course Page and User Profile sections, using microservices architecture.",
          "Ensured efficient data integration and real-time functionality.",
        ],
      },
      {
        category: "Testing",
        data: [
          "Conducted unit testing using Junit to maintain code quality and functionality.",
          "Deployed and tested changes through a CI/CD pipeline built with Jenkins.",
        ],
      },
      {
        category: "Leadership",
        data: "Played a crucial role in designing and optimizing key sections of the Antra-LMS system.",
      },
      {
        category: "Problems",
        data: [
          "The challenge of working with microservices architecture, including ensuring proper communication, data consistency, and scalability.",
          "Adapting to Spring technologies for efficient development, particularly the Spring MVC and Spring Boot frameworks.",
          "Learning and integrating Docker and Kubernetes for containerization and deployment of the application.",
          "Ensuring the reliability of the CI/CD pipeline built with Jenkins for rapid and reliable updates.",
        ],
      },
    ],
    otherMedia: [{}],
    CurrentIssues: [],
  },
  {
    id: 4,
    title: "Gallify App",
    techStack: "Swift, Firebase Auth, Cloud Firestore, Xcode",
    techStackIcons: [cibSwift, cibFirebase, cibXcode],
    iconsColor: ["#E84E36", "#FFCA28", "#17A6E7"],
    description:
      "An app for artists with AR imaging in 3D, can view art in your room",
    thumbnail: gallify,
    teamSize: 9,
    purpose: "Software Engineer Course Project @ UW-Madison",
    Role: "Serverless Software Engineer",
    githubLink: "https://github.com/alexgoldsmith/badgermentalhealth",
    demoUrl: <iframe title="gallify"></iframe>,
    insights: [
      {
        category: "Team",
        data: "Tejvir Mann, Shruti Sharma, Sourish Kundu, Anshul, Aryaman, Luke, Jay",
      },
      {
        category: "Learning",
        data: [
          "Gained expertise in Swift, Firebase Authentication, and Cloud Firestore.",
          "Contributed to building an innovative AR imaging app.",
        ],
      },
      {
        category: "Planning",
        data: [
          "Collaborated with the team to plan and execute Scrum sprints.",
          "Used GitHub Projects to track progress and create and update tickets.",
        ],
      },
      {
        category: "Developing",
        data: [
          "Implemented user authentication system and data models.",
          "Created CRUD methods for various components using asynchronous database queries.",
          "Developed REST endpoints for HTTPS requests to the Gallify Marketplace website.",
        ],
      },
      {
        category: "Testing",
        data: [
          "Stress-tested new features before merging with existing code.",
          "Followed the Scrum SDLC process for feature development and beta launches.",
        ],
      },
      {
        category: "Leadership",
        data: "Led the development and design of Gallify's system architecture. You can view the System Design in Figma [here](https://www.figma.com/file/3x3LpTRo1HNUjGDeLfeORH/Gallify---System-Design?type=design&mode=design&t=n5oylaCGiIEFsUsV-1).",
      },
      {
        category: "Problems",
        data: [
          "Challenges in team collaboration and communication as I was new to software development. Had to learn how to effectively work in a team, including understanding agile methodologies and project management tools.",
          "Struggles with understanding and implementing asynchronous programming, especially as the app's complexity grew. I encountered issues with data synchronization and handling asynchronous tasks within the Firebase environment.",
        ],
      },
    ],
    otherMedia: [
      {
        title: "Gallify Pitch Presentation created by CEO",
        data: [
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W2RvpHjGHhU?si=3KFvweMKIyF1j9nT"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>,
        ],
      },
      {
        title: "Screenshots of Screens designed in Figma",
        data: [
          <LoginPage />,
          <ReelPage />,
          <ProfilePage />,
          <ArtPlayerPage />,
          <LikedPage />,
          
        ],
      },
    ],
    CurrentIssues: [],
  },
];
