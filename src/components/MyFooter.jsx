import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import "./component.css";

const MyFooter = function () {
  return (
    <footer>
      <Container fluid={true} className="bg-dark text-secondary mt-3">
        <Row className="justify-content-center">
          <Col xs={12} sm={6}>
            <Row>
              <Col className="mb-2">
                <Facebook className="footer-icon me-2" />
                <Instagram className="footer-icon me-2" />
                <Twitter className="footer-icon me-2" />
                <Youtube className="footer-icon" />
              </Col>
            </Row>

            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Legal Notices
                    </a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Cookie Preferences
                    </a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Corporate Information
                    </a>
                  </p>
                </div>
              </Col>
            </Row>

            {/* Service Code Button */}
            <Row>
              <Col className="mb-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="footer-button bg-dark rounded-0 mt-3"
                >
                  Service Code
                </Button>
              </Col>
            </Row>

            {/* Copyright */}
            <Row>
              <Col className="mb-2 mt-2 copyright">
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default MyFooter;
