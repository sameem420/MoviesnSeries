import "./App.css";
import { Container } from "react-bootstrap";
import AddMovie from "./Components/AddMovie";

function App() {
  return (
    <Container fluid>
      <h1 className="text-center main-heading">Movies n Series</h1>
      <AddMovie />
    </Container>
  );
}

export default App;
