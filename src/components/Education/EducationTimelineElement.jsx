/** @format */

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../styles/styles.css";

const EducationTimelineElement = ({
  logo,
  alt,
  university,
  major,
  location,
  list,
  date,
}) => {
  const renderListItem = (item) => {
    // Check if the item is an object and has the isLink property
    if (typeof item === "object" && item.isLink) {
      return (
        <li key={item.text}>
          <a
            style={{ colorScheme: "dark", textDecoration: "underline" }}
            href={item.href} // Ensure this matches the object property for the URL
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
      contentStyle={{ background: "#9741cc", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #9741cc" }}
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
            width: "100%", // Use 100% of the icon container
            height: "100%", // Use 100% of the icon container
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt={alt}
            style={{
              maxWidth: "70%", // Adjust the size of the image as necessary
              maxHeight: "70%", // Adjust the size of the image as necessary
            }}
          />
        </div>
      }
      style={{ maxWidth: "90vw" }}
    >
      <h3 className="vertical-timeline-element-title">{university}</h3>
      <h4 className="vertical-timeline-element-subtitle">{major}</h4>{" "}
      {/* Added subtitle for consistency */}
      <p>{location}</p>
      <ul>{list.map((item, index) => renderListItem(item, index))} </ul>
    </VerticalTimelineElement>
  );
};

export default EducationTimelineElement;
