import { Container, Row, Col, Button } from 'react-bootstrap'
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons'

const MyFooter = function() {
    return(
        <footer>
        <Container fluid={true} className="bg-dark text-secondary mt-5">
          <Row className="justify-content-center">
            <Col xs={12} sm={6}>
              {/* Social Icons */}
              <Row>
                <Col className="mb-2">
                  <Facebook className="footer-icon me-2" />
                  <Instagram className="footer-icon me-2" />
                  <Twitter className="footer-icon me-2" />
                  <Youtube className="footer-icon" />
                </Col>
              </Row>
              
              {/* Footer Links */}
              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
                <Col>
                  <div className="footer-links">
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Audio and Subtitles</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Media Center</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Privacy</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Contact us</a></p>
                  </div>
                </Col>
                <Col>
                  <div className="footer-links">
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Audio Description</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Investor Relations</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Legal Notices</a></p>
                  </div>
                </Col>
                <Col>
                  <div className="footer-links">
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Help Center</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Jobs</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Cookie Preferences</a></p>
                  </div>
                </Col>
                <Col>
                  <div className="footer-links">
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Gift Cards</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Terms of Use</a></p>
                    <p><a href="#" alt="footer link" className="text-secondary text-decoration-none">Corporate Information</a></p>
                  </div>
                </Col>
              </Row>
  
              {/* Service Code Button */}
              <Row>
                <Col className="mb-2">
                  <Button variant="secondary" size="sm" className="footer-button bg-dark rounded-0 mt-3">
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
    )
}
export default MyFooter