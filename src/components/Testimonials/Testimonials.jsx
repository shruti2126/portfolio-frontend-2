/** @format */
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Col, Row } from "react-bootstrap";
import RyanImage from "../../assets/testimonials/Ryan.jpeg";
import TejvirImage from "../../assets/testimonials/Tejvir.jpeg";
import ShreyasImage from "../../assets/testimonials/Shreyas.jpeg";
import Title from "../Title";
import "../../styles/styles.css";
const data = [
  {
    id: 1,
    img: RyanImage,
    name: "Ryan Gillespie",
    profession: "Software Engineer @ John Deere",
    relationship: "Team member, Software Engineering @ UW-Madison",
    text: "My time working with Shruti was on a very challenging project that saw multiple group members leave the group before important deadlines. Thankfully, by staying level-headed and by collaborating closely with myself, we were able to pull through and deliver on time. We were only able to succeed due to Shruti's fantastic work ethic and strong software engineering skills. I wholeheartedly recommend her for any software development role you have open.",
  },
  {
    id: 2,
    img: TejvirImage,
    name: "Tejvir Singh",
    profession: "Software Engineer @ Target",
    relationship: "Project Manager and Team member @ Gallify LLC",
    text:
      "It is with much enthusiasm that I recommend Shruti Sharma for any Software Engineering role." +
      " I have worked alongside Shruti for many months as a fellow engineer at Gallify. While working at Gallify, she displayed many great qualities that I believe highly qualify her for all software engineering roles. Rare abilities that we often look for in engineers include high levels of creativity, wit, and analytical thinking, all of which Shruti has shown in her time on our team." +
      " She has shown to be a person not scared of new challenges – while on our team, she utilized various coding languages and APIs, including Swift and Firebase. Furthermore, in many tough situations Shruti made correct decisions – when Shruti figured out how to properly use the Firebase API within a Swift MVVM architecture application, or when she helped our team reach a schema that was backwards compatible." +
      " Shruti stepped up to the plate many times throughout our app's time, and played a critical role in its development.",
  },
  {
    id: 3,
    img: ShreyasImage,
    name: "Shreyas Kasturi",
    profession: "Program Manager @ Medtronic",
    relationship: "Mentor for Capstone project @ UW-Madison",
    text: "Shruti is technically competent and always shows enthisiasm for learning new technologies and finding solutions. She and I collaborated on a University Capstone project while I mentored her and her team at Medtronic. She looks for doing tasks in the best and optimized ways, thinks long term and has good vision of overall objectives.",
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="component">
      <Title heading={"Testimonials"} />
      <Row xs={1} md={3} className="g-4" style={{ padding: "2em" }}>
        {" "}
        {data.map((item) => (
          <Col key={item.id} sm={4}>
            {" "}
            <TestimonialCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Testimonials;
