/** @format */

import { CloseButton } from "react-bootstrap";

const Popover = ({ title, content, open }) => {
  return (
    <div id="popover-container">
      <div id="popover">
        <div id="close-button">
          <CloseButton
            onClick={() => open(false)}
          />
        </div>
        <p id="title">{title}</p>
        <hr />
        <p id="content">{content}</p>
      </div>
    </div>
  );
};
export default Popover;
