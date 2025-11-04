import "./index.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Container className="mt-4">
        <Row className="g-4">
          <Col xs={12} md={6} className="d-flex">
            <Contact
              img="/img/cat_img/6vznqLC3jJFb4krwmBZNBK.jpg"
              h3="John"
              p="123-456789"
            />
          </Col>
          <Col xs={12} md={6} className="d-flex">
            <Contact
              img="/img/cat_img/breed_abyssinian_cat.jpg"
              h3="Sahar"
              p="456-123789"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="d-flex">
            <Contact
              img="/img/cat_img/c39db240-42ae-11f0-88e1-3f1b11853089.jpg"
              h3="Mina"
              p="789-123456"
            />
          </Col>
          <Col xs={12} md={6} className="d-flex">
            <Contact
              img="/img/cat_img/cat-and-kitten-snuggling.jpg"
              h3="Lili"
              p="963-852147"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
