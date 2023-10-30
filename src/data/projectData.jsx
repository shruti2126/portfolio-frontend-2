/** @format */
import brain from "../assets/brain2.png";
import fitU from "../assets/fitU-2.jpeg";
import antra from "../assets/antra.jpg";
import gallify from "../assets/gallify.png";
import artPlayer from "../assets/gallifyFigmaScreenshots/art-player.png";
import liked from "../assets/gallifyFigmaScreenshots/liked.png";
import login from "../assets/gallifyFigmaScreenshots/login.png";
import profilePage from "../assets/gallifyFigmaScreenshots/profile-page.png";
import reelPage from "../assets/gallifyFigmaScreenshots/reel-page.png";
import "../styles/projects.css";
import bmhImpl from "../assets/badger-break/implementation-flow.png";
import hippa from "../assets/badger-break/HIPPAA.png";
import leanCanvas from "../assets/fitu/lean-canvas.png";
import sb1 from "../assets/fitu/storyboard-1.png";
import sb2 from "../assets/fitu/storyboard-2.png";

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
      "A simple self-help to allow students who are apprehensive towards the idea of help to get a head start in understanding their mental and emotional health." +
      "The app allows users to locally store coping cards, chat with community members using an anonymous username and take short quizzes to determine their emotional state and understand their thought patterns.",
    thumbnail: brain,
    teamSize: 3,
    purpose: "Software Engineering Course Project @ UW-Madison",
    Role: "Full Stack Developer/Project Owner",
    githubLink: "https://github.com/alexgoldsmith/badgermentalhealth",
    demoUrl: (
      <iframe
        className="responsive-iframe"
        src="https://www.youtube.com/embed/nDAv6zhtark?si=jv0gz3MHdc8Zphbc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    insights: [
      {
        category: "Team",
        data: "Shruti Sharma (Software Developer/Project Owner), Ryan Gillespie (Full Stack Developer/Scrum Master), Alex Goldsmith (QA Engineer)",
      },
      {
        category: "Learning",
        data: [
          "Gained substantial experience in MongoDB, ReactJS, ExpressJS, and NodeJs.",
          "Enhanced skills in full-stack development and project ownership.",
        ],
      },
      {
        category: "Planning",
        data: [
          "Followed an Agile development process for iterative development.",
          "Planned to keep our app HIPAA compliant by not saving user health/sensitive data in the cloud.",
        ],
      },
      {
        category: "Developing",
        data: [
          "Actively contributed to both frontend and backend aspects of the project.",
          "Built CRUD functions and ExpressJS API for data management.",
          "Implemented React Native Async-storage for data persistence on user devices.",
        ],
      },
      {
        category: "Testing",
        data: [
          "Worked closely with the Psychologist to ensure app data was medically accurate.",
          "QA engineer provided unit and integration tests regularly to aid development iterations",
          "Tests were written with JEST framework.",
        ],
      },
      {
        category: "Leadership",
        data: [
          "Led the team as the project owner.",
          "Collaborated with team members for effective task management and progress tracking.",
          "Facilitated discussions with the TA or with Professor to resolve conflicts",
        ],
      },
      {
        category: "Challenges",
        data: [
          "Faced challenges in synchronizing community board 'Like' functionality and the need for database reload.",
          "Addressed issues related to component updates not being synchronous with the database.",
          "Lost team members midway through the semester and had to adapt as a team to meet deadlines.",
          "Dealt with conflicts with team members regarding peer reviews and scores and the group had to collectively find" +
            " strategies to maintain productivity.",
          "Not enough Assessments available yet.",
        ],
      },
    ],
    otherMedia: [
      {
        title: "Badger Break App Implementation Flow",
        type: "image",
        data: [<img src={bmhImpl} alt="badger break implementation flow" />],
      },
      {
        title: "HIPPA Compliance Presentation Slide",
        type: "image",
        data: [<img src={hippa} alt="HIPPA Compliance Presentation Slide" />],
      },
    ],
    CurrentIssues: [
      "Community Board 'Like' functionality not correct. Single user can likea post multiple times.",
      "Updates to components not synchronous with database. Needs reload to appear on screen.",
    ],
  },
  {
    id: 2,
    title: "fitU",
    techStack: "Firebase Auth, Cloud Firestore, ReactNative, Typescript, Expo",
    techStackIcons: [cibFirebase, cibTypescript, cibReact, cibExpo],
    iconsColor: ["#FFCA28", "#2F74C0", "#01D2F6s", "#0B0F13"],
    description:
      "A weight-loss app that uses Statistical analysis to provide users insight into what activity, for e.g walking, sleeping, eating etc., they engage in daily/weekly, is affecting their the weight-loss the most.",
    thumbnail: fitU,
    teamSize: 5,
    purpose: "Capstone Project @ UW-Madison",
    Role: "Full Stack Developer",
    githubLink: "https://github.com/shruti2126/fitu-version-2",
    demoUrl: (
      <iframe
        className="responsive-iframe"
        src="https://www.youtube.com/embed/wYPLqR3bxF8?si=TcLuHX1zoQMcAjl8"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    insights: [
      {
        category: "Team",
        data: "Akshay Bodla (Lead Developer), Shruti Sharma (Software Developer/Scrum Master), Oliver You(Software Developer), Kavya Sebastian(Software Developer), Mengze Li(Frontend Developer)",
      },
      {
        category: "Learning",
        data: [
          "Solidified basic understanding of Functional programming and NoSQL databases by" +
            "working with Firebase Authentication, Cloud Firestore, and React Native.",
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
        category: "Challenges",
        data: [
          "Faced challenges integrating real-time data from Apple Health Kit with the Expo React Native app.",
          "Explored statistical models as an alternative to machine learning for weight correlation due to the steep learning curve.",
        ],
      },
    ],
    otherMedia: [
      {
        title: "Lean Canvas use during Ideation",
        type: "image",
        data: [<img src={leanCanvas} alt="Lean Canvas" />],
      },
      {
        title: "Storyboards",
        type: "image",
        data: [
          <img src={sb1} alt="Storyboard for fitU" />,
          <img src={sb2} alt="Storyboard for fitU" />,
        ],
      },
    ],
    CurrentIssues: [
      "No testing accept user-acceptance and manual integration testing.",
      "No real health data since Apple Health Kit i.e react-native-health library, not integrated," +
        "hence statistical model / correlation screen" +
        "presents hard coded data for demo purposes. Dashboard 'sleep' and 'steps' data also hard coded.",
      "No middleware created, might require one for API integrations.",
    ],
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
    demoUrl: (
      <iframe
        className="responsive-iframe"
        src="https://www.youtube.com/embed/FTmMN4_Jl04?si=NTdZl-kn1EZT8vnK"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    insights: [
      {
        category: "Team",
        data: "Shruti Sharma, Dawei Zhuang (Supervisor/Senior Java Developer)",
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
        category: "Challenges",
        data: [
          "The challenge of working with microservices architecture, including ensuring proper communication, data consistency, and scalability.",
          "Adapting to Spring technologies for efficient development, particularly the Spring MVC and Spring Boot frameworks.",
          "Learning and integrating Docker and Kubernetes for containerization and deployment of the application.",
          "Ensuring the reliability of the CI/CD pipeline built with Jenkins for rapid and reliable updates.",
        ],
      },
    ],
    otherMedia: [],
    CurrentIssues: [],
  },
  {
    id: 4,
    title: "Gallify App",
    techStack: "Swift, Firebase Auth, Cloud Firestore, Xcode",
    techStackIcons: [cibSwift, cibFirebase, cibXcode],
    iconsColor: ["#E84E36", "#FFCA28", "#17A6E7"],
    description:
      "Gallify is a SaaS company that allows users to turn their real art into virtual art, and sell it in a social marketplace." +
      "Using the Gallify app, users can discover these art works and purchase different versions of it including 3D models, Animations and Smart Art.",
    thumbnail: gallify,
    teamSize: 9,
    purpose: "Startup / Volunteer Experience",
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
        data: "Led the development and design of Gallify's system architecture.",
      },
      {
        category: "Challenges",
        data: [
          "Faced difficulties in team collaboration and communication as I was new to software development." +
            " Had to learn how to effectively work in a team, including understanding agile methodologies and project management tools.",
          "Struggled understanding and implementing asynchronous programming, especially as the app's complexity grew. I encountered issues with data synchronization and handling asynchronous tasks within the Firebase environment.",
        ],
      },
    ],
    otherMedia: [
      {
        title: "Gallify Pitch Presentation created by CEO",
        type: "video",
        data: [
          <iframe
            className="responsive-iframe"
            src="https://www.youtube.com/embed/W2RvpHjGHhU?si=3KFvweMKIyF1j9nT"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>,
        ],
      },
      {
        title: "Screenshots of Screens designed in Figma",
        type: "image",
        data: [
          <img src={login} alt="login page" />,
          <img src={profilePage} alt="profile page" />,
          <img src={artPlayer} alt="art player" />,
          <img src={liked} alt="liked page" />,
          <img src={reelPage} alt="Reel page" />,
        ],
      },
    ],
    CurrentIssues: [],
  },
];
