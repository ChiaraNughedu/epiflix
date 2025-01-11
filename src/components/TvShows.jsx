import { Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { Grid, Grid3x3 } from 'react-bootstrap-icons'


const TvShows = function() {
    return(
        <Container fluid={true} className="bg-dark px-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-3 text-light">TV Shows</h2>
            <div className="btn-group" role="group">
              <Dropdown className="ms-4 mt-1">
                <DropdownButton
                  variant="secondary"
                  size="sm"
                  id="dropdown-custom-components"
                  title="Genres"
                  //style={{ backgroundColor: '#212529' }}
                  className="bg-dark rounded-0"
                >
                  <Dropdown.Item href="#">Comedy</Dropdown.Item>
                  <Dropdown.Item href="#">Drama</Dropdown.Item>
                  <Dropdown.Item href="#">Thriller</Dropdown.Item>
                </DropdownButton>
              </Dropdown>
            </div>
          </div>
          <div>
            <Grid className="icons text-light mt-1" style={{ marginLeft: '15px' }} />
            <Grid3x3 className="icons text-light mt-1" style={{ marginLeft: '15px' }} />
          </div>
        </div>
      </Container>
    )
}
export default TvShows