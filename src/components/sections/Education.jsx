/** @format */
import { Box, Heading } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../styles/styles.css";
import { ReactComponent as Rutgers } from "../../assets/rutgers/Rutgers.svg";
import { ReactComponent as Washington } from "../../assets/washington/Washington.svg";
import { ReactComponent as Wisconsin } from "../../assets/wisconsin/Wisconsin.svg";
import TransferReason from "../TransferReason";
const Education = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      border="1px solid white"
      overflowY="scroll"
      id="education"
      bgGradient={["linear(to-t, pink.100, purple.200, blue.200)"]}
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
            <li>3.4/4.0 GPA</li>
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
              The period during which I had applied for transfer, not too many
              universities were open to accepting 3rd year CS students. Rutgers
              was one of the few and was accepting admission on rolling basis
              and so I applied hoping I could make use of upcoming Fall
              semester. And I thought, in case I decide to transfer (which I
              thought was insane at the time by the way!), I could try to apply
              elsewhere for Spring.
              <br />
              As outrageous as it seemed to me, I was encouraged to apply again
              to try my luck at a more "Prestigious" institution. And no, my
              family members or friends weren't the sources of this advice! This
              one is a long story and might need me to write an entire blog ;).
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
