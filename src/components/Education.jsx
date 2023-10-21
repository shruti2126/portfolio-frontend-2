/** @format */
import { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/styles.css";
import { ReactComponent as Rutgers } from "../assets/Rutgers.svg";
import { ReactComponent as Washington } from "../assets/Washington.svg";
import { ReactComponent as Wisconsin } from "../assets/Wisconsin.svg";
import scrollToSection from "../functions/scrollToSection";
import TransferReason from "./TransferReason";
const Education = () => {
  useEffect(() => {
    if (window.location.pathname.includes("education")) {
      scrollToSection("education");
    }
  }, []);
  return (
    <Box
      maxH="100vh"
      w="100vw"
      overflowY="auto"
      id="education"
      bgGradient={["linear(to-t, purple.100, blue.100, pink.200)"]}
    >
      <Heading className="heading" textAlign="center" as="h3" size="lg">
        Education History
      </Heading>
      <VerticalTimeline>
        {/* University of Washington */}
        <VerticalTimelineElement
          contentStyle={{ background: "#9741cc", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #9741cc" }}
          date="Sep 2017 – Jun 2019"
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<Washington />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Washington
          </h3>
          <p>
            Pre-Sciences Major/Prospective CS major <br />
            Seattle, Washington
          </p>
          <ul>
            <li>3.3/4.0 GPA</li>
            <li>Dean’s list – Fall 2018</li>
            <li>
              First year course research project showcase published in Journal{" "}
              <a
                style={{ colorScheme: "dark", textDecoration: "underline" }}
                href="https://www.processjmus.org/gendercomputerscience"
              >
                Process: Journal for Multidisciplinary Undergraduate
                Scholarship, Special Issue No.1, 2018.{" "}
              </a>
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* Explanation for transfer */}
        <TransferReason
          reason={
            <p>
              I was not admitted directly into a major. I spent two years trying
              to get into the Computer Science program or another preferred
              major like Mechanical, Electrical, Informatics etc. However, after
              repeated rejections, I reluctantly decided to transfer to another
              university to pursue Computer Science or another STEM major of my
              choice.
            </p>
          }
        />

        {/* University of Rutgers */}
        <VerticalTimelineElement
          contentStyle={{ background: "#ba9e20", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #ba9e20" }}
          date="Aug 2019 - Dec 2019"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<Rutgers />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Rutgers
          </h3>
          <p>
            Computer Science Major & Mathematics Minor <br />
            Camden, New Jersey
          </p>
          <ul>
            <li>4.0/4.0 GPA</li>
            <li>Dean’s list – Fall 2019</li>
          </ul>
        </VerticalTimelineElement>
        {/* Explanation for transfer */}
        <TransferReason
          reason={
            <p>
              I chose to go to Rutgers with the intent of graduating from this
              institution, however, I was strongly adviced against it by a
              Professor whose course I was required to enroll. "You have made a
              blunder! You should go anywhere but here," they said. because they
              believed I would be 'wasting' my potential (as a former student of
              UW-Seattle, which is one of the best universities in the world)
              and might not be able to get the best job opportunities as an
              immigrant in this country.
              <br />
              In a nutshell, I had hit a rock-bottom of sorts and had zero
              conviction in my decisions, so I believed they must be right and
              it would really be a 'shame' if I don't push my boundaries and
              challenge myself once again. Hence, I applied to UW-Madison."
              <br />
              As you can tell, their opinions were strong and debatable I would
              say and I am still unsure if the second transfer was the best
              decision for me or not. It was an adventure for sure!
            </p>
          }
        />
        {/* University of Wisconsin-Madison */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#8c2323", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #8c2323" }}
          date="Jan 2020 - May 2022"
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<Wisconsin />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Wisconsin
          </h3>
          <p>
            B.S in Computer Science <br />
            Madison, WI
          </p>
          <ul>
            <li>3.6/4.0 GPA</li>
            <li>Dean's List - Spring, 2020</li>
            <li>WACM Member, 2020-2022</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default Education;
