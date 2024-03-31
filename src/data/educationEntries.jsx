/** @format */
import Rutgers from "../assets/rutgers/Rutgers.webp";
import Washington from "../assets/washington/Washington.webp";
import Wisconsin from "../assets/wisconsin/Wisconsin.webp";

export const educationDataImages = [
  {
    id: 1,
    src: Rutgers,
  },
  {
    id: 2,
    src: Washington,
  },
  {
    id: 3,
    src: Wisconsin,
  },
];
export const educationEntries = [
  {
    type: "education",
    data: {
      logo: Washington,
      alt: "Washington Icon",
      university: "University of Washington",
      major: "Pre-Sciences Major/Prospective CS major",
      location: "Seattle, Washington",
      date: "Sep 2017 – Jun 2019",
      list: [
        "3.4/4.0 GPA",
        "Dean’s list – Fall 2018",
        {
          isLink: true,
          text: "First year course research project showcase published in Process: Journal for Multidisciplinary Undergraduate Scholarship, Special Issue No.1, 2018.",
          href: "https://www.processjmus.org/gendercomputerscience",
        },
      ],
    },
  },
  {
    type: "transferReason",
    data: {
      reason: (
        <p>
          My journey at the University of Washington taught me resilience and
          adaptability. Despite my efforts, I faced challenges in securing a
          major that resonated with my passions. Embracing this as a learning
          experience, I chose to transfer where I could pursue my deep interest
          in Computer Science, reaffirming my commitment to my chosen field and
          my future career.
        </p>
      ),
    },
  },
  {
    type: "education",
    data: {
      logo: Rutgers,
      alt: "Rutgers Icon",
      university: "University of Rutgers",
      major: "Computer Science Major & Mathematics Minor",
      location: "Camden, New Jersey",
      date: "Aug 2019 - Dec 2019",
      list: ["4.0/4.0 GPA", "Dean’s list – Fall 2019"],
    },
  },
  {
    type: "transferReason",
    data: {
      reason: (
        <p>
          Transferring to Rutgers was a pivotal moment that came with its share
          of uncertainty, yet it was a decision made with optimism and a
          strategic view towards the future. It offered a valuable lesson in
          seizing opportunities even when they appear daunting. This step wasn't
          just about pursuing a prestigious degree; it was about finding the
          right place to cultivate my academic and professional aspirations.
        </p>
      ),
    },
  },
  {
    type: "education",
    data: {
      logo: Wisconsin,
      alt: "Wisconsin Icon",
      university: "University of Wisconsin",
      major: "B.S in Computer Science",
      location: "Madison, WI",
      date: "Jan 2020 - May 2022",
      list: [
        "3.6/4.0 GPA",
        "Dean's List - Spring, 2020",
        "WACM Member, 2020-2022",
      ],
    },
  },
];

