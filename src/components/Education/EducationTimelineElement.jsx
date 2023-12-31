/** @format */

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../styles/styles.css";
import universityColorMap from "./colorMap";

const EducationTimelineElement = ({
  logo,
  alt,
  university,
  major,
  location,
  list,
  date,
}) => {
  const universityColor = universityColorMap[university] || "#ddd"; // Default color if not found
  const renderListItem = (item) => {
    // Check if the item is an object and has the isLink property
    if (typeof item === "object" && item.isLink) {
      return (
        <li key={item.text}>
          <a
            style={{ colorScheme: "dark", textDecoration: "underline" }}
            href={item.href} 
          >
            {item.text}
          </a>
        </li>
      );
    }
    return <li key={item}>{item}</li>;
  };

  return (
    <VerticalTimelineElement
      contentStyle={{ background: universityColor, color: "#fff" }}
      contentArrowStyle={{ borderRight: `7px solid ${universityColor}` }}
      date={date}
      className="vertical-timeline-element--experience"
      iconStyle={{
        background: "#fff",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 0 4px #fff",
      }}
      icon={
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt={alt}
            style={{
              maxWidth: "70%",
              maxHeight: "70%",
            }}
          />
        </div>
      }
      style={{ maxWidth: "90vw" }}
    >
      <h3 className="vertical-timeline-element-title">{university}</h3>
      <h4 className="vertical-timeline-element-subtitle">{major}</h4>{" "}
      <p>{location}</p>
      <ul>{list.map((item, index) => renderListItem(item, index))} </ul>
    </VerticalTimelineElement>
  );
};

export default EducationTimelineElement;
