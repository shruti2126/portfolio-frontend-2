/** @format */
import { useState } from "react";
import Card from "react-bootstrap/Card";

const TestimonialCard = ({ img, name, profession, relationship, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card style={{display: "flex", flexDirection:"row"}}>
      <Card.Img variant="" src={img} style={{height:"30%"}} />
      <Card.Body>
        <Card.Title
          style={{
            marginBottom: "0.5em",
            textOverflow: "ellipsis",
            maxHeight: isExpanded ? "100%" : "min-content",
            whiteSpace: isExpanded ? "wrap" : "nowrap",
            overflow: isExpanded ? "visible" : "hidden",
          }}
        >
          {name} {", "} {profession}
        </Card.Title>
        <Card.Subtitle
          style={{
            marginBottom: "0.5em",
            textOverflow: "ellipsis",
            maxHeight: isExpanded ? "100%" : "min-content",
            whiteSpace: isExpanded ? "wrap" : "nowrap",
            overflow: isExpanded ? "visible" : "hidden",
          }}
        >
          {relationship}
        </Card.Subtitle>
        <div style={{ maxHeight: "fit-content" }}>
          {" "}
          <Card.Text
            style={{
              textOverflow: "ellipsis",
              maxHeight: isExpanded ? "100%" : "min-content",
              whiteSpace: isExpanded ? "wrap" : "nowrap",
              overflow: isExpanded ? "visible" : "hidden",
            }}
          >
            {text}
          </Card.Text>
          {!isExpanded && (
            <p
              style={{ color: "teal", cursor: "pointer" }}
              onClick={() => setIsExpanded(true)}
            >
              Read More{" "}
            </p>
          )}
          {isExpanded && (
            <span
              style={{ color: "teal", cursor: "pointer" }}
              onClick={() => setIsExpanded(false)}
            >
              Read Less{" "}
            </span>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;
