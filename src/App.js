import "./App.css";
import AddMovie from "./Components/AddMovie";
import AddSeries from "./Components/AddSeries";

function App() {
  return (
    <div className="container-fluid">
      <h1 className="text-center main-heading">
        TVLogz
      </h1>
      <AddSeries />
    </div>
  );
}

export default App;
