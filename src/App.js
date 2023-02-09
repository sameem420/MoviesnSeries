import "./App.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <h1 className="text-center main-heading">Movies n Series</h1>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie or Series</Form.Label>
              <Form.Control type="text" placeholder="Enter Movie or Series name" />  
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Col>
      </Row>
      <Row md={12} className="justify-content-center mx-auto">
        <Col md>1 of 3</Col>
        <Col md>2 of 3</Col>
        <Col md>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default App;
