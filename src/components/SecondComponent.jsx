import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './component.css'
import { ChevronRight } from "react-bootstrap-icons";

const URL = "https://www.omdbapi.com/?apikey=6184ff48&s=harry%20potter";

class SecondComponent extends Component {
  state = {
    Search: [],
  };

  filmRow = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        this.setState({
          Search: data.Search,
        });
      } else {
        throw new Error("Non riesco a recuperare i dati!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.filmRow();
  }


  render() {
    return (
      <Container fluid={true} className="bg-dark mt-0">
        <Row>
            <h4 className="text-light fs-5 mt-0">Harry Potter</h4>
        </Row>

        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-1 mb-4"
        style={{
          display: 'flex',
          flexWrap: 'nowrap', 
          overflowX: 'hidden',  
          paddingBottom: '10px', 
        }}>
          {this.state.Search.map((film, imdbID) => (
            <Col key={film._imdbID} className="mb-3 justify-content-center" style={{ flex: '1 0 0' }}>
              <Card className="text-center card fixed-card-width">
                <Card.Img
                  variant="center"
                  src={film.Poster}
                  alt={`movie picture ${imdbID + 1}`}
                  className="img-fluid w-100 fixed-size-img"
                />
              </Card>
            </Col>
          ))}
        </Row>
        
      </Container>
    );
  }
}
export default SecondComponent;