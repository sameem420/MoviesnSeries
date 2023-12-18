import React, { useState } from "react";

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
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={(e) => addMovieRecord(e)}>
            <div className="form-group mb-3" controlId="seriesName">
              <label className="form-label">Movie Name</label>
              <input className="form-control"
                type="text"
                placeholder="eg: Teen Wolf"
                value={movieRecord.name}
              />
            </div>
            <div className="form-group mb-3" controlId="seriesYear">
              <label className="form-label">Movie Release Year</label>
              <input className="form-control"
                type="text"
                placeholder="eg: 2005"
                value={movieRecord.startingYear}
              />
            </div>
            <div className="form-group mb-3" controlId="seriesSeason">
              <label className="form-label">Series Season</label>
              <select className="form-control"
                aria-label="series-season"
                value={movieRecord.season}
              >
                <option value="Season 1">Season 1</option>
                <option value="Season 2">Season 2</option>
                <option value="Season 3">Season 3</option>
                <option value="Season 4">Season 4</option>
                <option value="Season 5">Season 5</option>
              </select>
            </div>
            <button className="btn btn-success" variant="primary" type="submit">
              Add Movie
            </button>
          </form>
        </div>
      </div>
      <div className=" row justify-content-center mx-auto">
        <div className="col">1 of 3</div>
        <div className="col">2 of 3</div>
        <div className="col">3 of 3</div>
      </div>
    </div>
  );
}

export default AddMovie;
