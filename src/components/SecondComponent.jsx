import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import "./component.css";

const URL = "https://www.omdbapi.com/?apikey=6184ff48&s=harry%20potter";

const SecondComponent = function() {
  const [Search, setSearch] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
 
//{
  //state = {
    //Search: [],
    //isLoading: true,
    //isError: false,
  //};

  const filmRow = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        //this.setState({
          //Search: data.Search,
          //isLoading: false,
        //});
        setSearch(data.Search)
        setIsLoading(false)
      } else {
        throw new Error("Non riesco a recuperare i dati!");
      }
    } catch (error) {
      console.log(error);
      //this.setState({
        //isLoading: false,
        //isError: true,
      //});
      setIsLoading(false)
      setIsError(true)
    }
  };

  //componentDidMount() {
    //this.filmRow();
  //}

  useEffect(() => {
    filmRow(), []
  })

  return (
      <Container fluid={true} className="bg-dark mt-3">
        <Row>
          <h4 className="text-light fs-5">Game of Thrones</h4>
        </Row>
        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
        {isError && (
          <div className="text-center">
            <Alert variant="danger">Oops! Qualcosa è andato storto.</Alert>
          </div>
        )}
        <Row
          className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-1"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "hidden",
            paddingBottom: "10px",
          }}
        >
          {Search.map((film, imdbID) => (
            <Col
              key={film._imdbID}
              className="mb-3 justify-content-center"
              style={{ flex: "1 0 0" }}
            >
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


export default SecondComponent;

