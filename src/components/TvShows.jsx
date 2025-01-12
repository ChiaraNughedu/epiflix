import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";
import "./component.css";

function TvShows() {
  return (
    <Container fluid={true} className="px-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-3 text-light">TV Shows</h2>
          <div className="btn-group" role="group">
            <Dropdown className="ms-4 mt-1 py-0">
              <DropdownButton
                variant="dark"
                size="sm"
                id="dropdown-custom-components"
                title="Genres"
                className="border rounded-0"
              >
                <Dropdown.Item href="#" className="bg-dark text-light">
                  Comedy
                </Dropdown.Item>
                <Dropdown.Item href="#" className="bg-dark text-light">
                  Drama
                </Dropdown.Item>
                <Dropdown.Item href="#" className="bg-dark text-light">
                  Thriller
                </Dropdown.Item>
              </DropdownButton>
            </Dropdown>
          </div>
        </div>
        <div>
          <Grid
            className="icons text-light mt-1"
            style={{ marginLeft: "15px" }}
          />
          <Grid3x3
            className="icons text-light mt-1"
            style={{ marginLeft: "15px" }}
          />
        </div>
      </div>
    </Container>
  );
}
export default TvShows;
