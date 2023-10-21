/** @format */
import { ReactComponent as Gallify } from "../assets/gallify.svg";
import { ReactComponent as Antra } from "../assets/antra.svg";
import { ReactComponent as Lengineer } from "../assets/Lengineer.svg";
import { ReactComponent as Wisconsin } from "../assets/Wisconsin.svg";
export const experiences = [
  {
    title: "Java Developer",
    type: "Professional",
    organization: "Antra, Inc",
    date: "Oct 2022 - June 2023",
    description: [
      "Trained in use of Advanced Java concepts like Stream API, Multithreading, and Lambda expressions.",
      "Built basic applications to understand the underlying functioning of ORM with a focus on Hibernate and Spring Data JPA.",
      "Learned various aspects of development with Spring, Spring MVC, and Spring Boot, including IOC and AOP.",
      "Created Monolithic RESTful Web services in Spring Boot using 3-tier Architecture (Web, Service, and Data Layers) and Maven for project Management.",
      "Created Microservices using various technologies like Service Discovery, Config Server, Rest Template, and Open Feign Client.",
      "Performed basic Unit and Integration tests on services using Junit and Mockito.",
      "Implemented Authentication and Authorization for users using Spring Security.",
      "Studied and integrated AWS services like Lambda, S3, EC2, SQS with REST APIs.",
      "Worked on the Internal Antra-LMS system.",
      "Built Course Page and User Profile sections of the site.",
      "Implemented microservices architectural design and technologies.",
      "Fetched and Integrated data from servers on the backend.",
      "Created unit tests using Junit.",
      "Deployed source code updates to Kubernetes with Docker containerization.",
      "Pushed changes through CI/CD pipeline built with Jenkins.",
    ],
    icon: <Antra />,
    textColor: "#5DA8BA",
  },
  {
    title: "Serverless Software Engineer",
    type: "Volunteer",
    organization: "Gallify LLC",
    date: "July 2021 - July 2022",
    description: [
      "Built backend hooks and a REST API using Express JS for Yellow Eye (A school management app).",
      "Used MongoDB Compass for Database.",
      "Created UI and frontend logic using React in Node JS and other libraries like Redux and Material UI.",
      "Attended standup meetings twice a week to discuss previous and future tasks.",
      "Collaborated with Supervisor to break down best possible solutions for implementing new features.",
      "Used Git for version control.",
      "Used Trello to keep track of new developments in code and create task-specific tickets.",
      "Collaborated with team members for debugging and testing purposes.",
    ],
    icon: <Gallify />,
    textColor: "#B95C84",
  },
  {
    title: "Web Developer Intern",
    type: "Co-op",
    organization: "LeNgineer",
    date: "Feb 2022 - May 2022",
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
    icon: <Lengineer />,
    textColor: "#6588BD",
  },
  {
    title: "Full Stack Developer/Scrum Master",
    type: "Capstone",
    organization: "UW-Madison",
    date: "Sep 2021 - Dec 2021",
    description: [
      "Used Google Design Sprint methodology to define the problem statement design prototype.",
      "Interviewed potential customers/end-users/target group to understand user requirements.",
      "Presented user stories and initial mock-up/prototype to Product Owners/mentors and interviewees.",
      "Used Lean Startup methodologies to build out the unique value proposition of our solution and other key ideas/questions on a lean canvas.",
      "Used Jira software to plan and execute Scrum sprints.",
      "Built frontend and backend logic for multiple screens in React Native and TypeScript.",
      "Integrated Redux storage with Firestore.",
      "Used React Native Async-storage library for persisting sensitive user info on the device.",
      "Worked with end-users to develop user acceptance test cases.",
    ],
    icon: <Wisconsin />,
    textColor: "#8C5348",
  },
  {
    title: "Full Stack Developer / Project Owner",
    type: "Course Project",
    organization: "Software Engineering @ UW-Madison",
    date: "Sep 2021 - Dec 2022",
    description: [
      "Worked on the project as Backend Software Engineer throughout the duration of the project.",
      "Built backend CRUD functions for all components and created an ExpressJS API.",
      "Used Mongo DB atlas for data persistence.",
      "Contributed to Frontend logic and UI using React Native and TypeScript.",
      "Contributed to frontend Hooks, components, and styling aspects.",
      "Worked with end users to develop user acceptance test cases.",
      "Used React Native Async-storage library for persisting user's private health data on their devices.",
      "Used Agile (Extreme) Waterfall Process to design, build and test the app.",
    ],
    icon: <Wisconsin />,
    textColor: "#4B3136",
  },
];