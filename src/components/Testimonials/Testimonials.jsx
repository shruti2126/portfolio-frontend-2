/** @format */
import React from "react";
import TestimonialCard from "./TestimonialCard";
// import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Title from "../Title";
import "../../styles/styles.css";
import TestimonialsData from "../../data/TestimonialsData";

const Testimonials = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchDataWithRetry(retriesLeft) {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8080/getAllDocs/testimonials"
  //       );
  //       console.log(response.data);
  //       setData(response.data);
  //     } catch (error) {
  //       if (retriesLeft > 0) {
  //         console.log(`Retrying request. ${retriesLeft} retries left.`);
  //         return fetchDataWithRetry(retriesLeft - 1);
  //       } else {
  //         throw new Error("Request failed after multiple attempts");
  //       }
  //     }
  //   }
  //   // Call the function with a specified number of retries
  //   fetchDataWithRetry(3)
  //     .then((data) => {
  //       console.log("Data:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  return (
    <div id="testimonials" className="component">
      <Title heading={"Testimonials"} />
      <Row xs={1} md={3} className="g-4" style={{ padding: "2em" }}>
        {" "}
        {TestimonialsData.map((item) => (
          <Col key={item.id} sm={4}>
            <TestimonialCard
             {...item}
            />
            {/* {<TestimonialCard2 />} */}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Testimonials;
