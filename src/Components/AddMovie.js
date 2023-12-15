import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function AddMovie() {
  const [movieRecord, setMovieRecord] = useState({
    name: undefined,
    releaseYear: undefined,
    season: undefined,
  });

  const addMovieRecord = (e) => {
    e.preventDefault();
    console.log("Function called!");
    const movieData = [...movieRecord, {}];
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={(e) => addMovieRecord(e)}>
            <Form.Group className="mb-3" controlId="seriesName">
              <Form.Label>Series Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg: Teen Wolf"
                value={movieRecord.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="seriesYear">
              <Form.Label>Series Starting Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg: 2005"
                value={movieRecord.startingYear}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="seriesSeason">
              <Form.Label>Series Season</Form.Label>
              <Form.Select
                aria-label="series-season"
                value={movieRecord.season}
              >
                <option value="Season 1">Season 1</option>
                <option value="Season 2">Season 2</option>
                <option value="Season 3">Season 3</option>
                <option value="Season 4">Season 4</option>
                <option value="Season 5">Season 5</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Series
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

export default AddMovie;
