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
    // demoUrl: { type: "video", key: "badgerBreakDemo.mp4" },
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
    insights: "",
    otherMedia: [{}],
    CurrentIssues: [
      <ul>
        <li>
          Community Board 'Like' functionality not correct. Single user can like
          a post multiple times.
        </li>
        <li>
          Updates to components not synchronous with database. Needs reload to
          appear on screen.
        </li>
      </ul>,
    ],
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
    // demoUrl: { type: "video", key: "fituDemo.mp4" },
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
    insights: "",
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
    teamSize: 3,
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
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    insights: "",
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
    teamSize: 10,
    purpose: "Software Engineer Course Project @ UW-Madison",
    Role: "Serverless Software Engineer",
    githubLink: "https://github.com/alexgoldsmith/badgermentalhealth",
    // demoUrl: { type: "video", key: "" },
    demoUrl: <iframe title="gallify"></iframe>,
    insights: "",
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
          <ArtPlayerPage />,
          <ReelPage />,
          <LikedPage />,
          <ProfilePage />,
        ],
      },
      // {
      //   title: "Design Skeleton for App",
      //   data: (
      //     <iframe
      //       title="Gallify Design Skeleton"
      //       src={GallifyDesignSkeleton}
      //       width="100%"
      //       height="500px"
      //       allowFullScreen
      //     />
      //   ),
      // },
    ],
    CurrentIssues: [],
  },
];
