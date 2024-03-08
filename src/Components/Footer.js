import React from "react";

// const Footer = () => {
//   return (
//     <div className="mt-auto py-3 bg-grey">
//       <div className="text-center py-3">© {year} Round to Heaven</div>
//     </div>
//   );
// };

// export default Footer;

import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-3 bg-light">
      <Container className="py-4">
        <Row>
          <Col md={5} sm={6}>
            <h5>Contact Us</h5>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> ONGC Junction, Kakinada
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} target="blank" />{" "}
              SupportR2H@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} target="blank" /> (+91) 999 222
              1122
            </p>
          </Col>
          <Col md={4} sm={6}>
            <h5>Follow Us</h5>
            <p>
              <a
                href="https://facebook.com"
                className="me-4"
                target="_blank"
                rel="noopner noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com"
                className="me-4"
                target="_blank"
                rel="noopner noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopner noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </p>
          </Col>
          <Col md={3} sm={7}>
            <h5>Legal</h5>
            <ListGroup variant="flush">
              <ListGroup.Item action href="">
                Privacy Policy
              </ListGroup.Item>
              <ListGroup.Item action href="">
                Terms of Use
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col className="text-center ">© {year} R2H. All Rights Reserved.</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
