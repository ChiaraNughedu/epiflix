import { Navbar, Nav, Container} from 'react-bootstrap';
import { Search, Bell, PersonCircle } from 'react-bootstrap-icons'

const MyNavbar = function() {
    return( 
        <Navbar expand="lg" bg="dark" variant="dark" style={{ backgroundColor: '#221f1f' }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="/logo.png" 
            alt="Logo"
            style={{ width: '100px', height: '55px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bold">Home</Nav.Link>
            <Nav.Link href="#" className="fw-bold">TV Shows</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Movies</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Recently Added</Nav.Link>
            <Nav.Link href="#" className="fw-bold">My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center me-3">
            <Search className="icons text-light" />
            <div id="kids" className="fw-bold text-light" style={{ marginLeft: '15px' }}>KIDS</div>
            <Bell className="icons text-light" style={{ marginLeft: '15px' }} />
            <PersonCircle className="icons text-light" style={{ marginLeft: '15px' }} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
    
export default MyNavbar