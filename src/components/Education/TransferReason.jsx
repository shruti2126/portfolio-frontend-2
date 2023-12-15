/** @format */
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TransferReason = ({ reason }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <VerticalTimelineElement
      iconStyle={{ background: "#fff", color: "#000" }}
      icon={<i className="fas fa-info-circle"></i>}
    >
      <h3 className="vertical-timeline-element-title">Reason for Transfer </h3>
      <Box
        maxW={isExpanded ? "-webkit-max-content" : "lg"}
        maxH={isExpanded ? "lg" : "sm"}
        overflow={isExpanded ? "visible" : "hidden"}
        whiteSpace={isExpanded ? "wrap" : "nowrap"}
        textOverflow="ellipsis"
      >
        {" "}
        {reason}
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
      </Box>
    </VerticalTimelineElement>
  );
};
export default TransferReason;
