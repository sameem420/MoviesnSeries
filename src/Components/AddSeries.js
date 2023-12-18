import React, { useState, useEffect, useRef } from "react";

function AddSeries() {
  const [seriesRecord, setSeriesRecord] = useState({
    name: undefined,
    startingYear: undefined,
    season: undefined,
  });

  const [seriesTitle, setSeriesTitle] = useState("");
  let seriesRef = useRef(null);

  const saveSeriesinfo = () => {
    console.log(seriesRef.current.value);
    setSeriesTitle(seriesRef.current.value);
    localStorage.setItem("series", seriesTitle);
  };

  const addSeriesRecord = (e) => {
    e.preventDefault();
    console.log("Function called!");
    const seriesData = [...seriesRecord, {}];
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={(e) => addSeriesRecord(e)}>
          <div className="col-md-4">
            <div className="form-group mb-3">
              <label className="form-label">Series Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="eg: Teen Wolf"
                ref={seriesRef}
                onChange={saveSeriesinfo}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group mb-3">
              <label className="form-label">Series Starting Year</label>
              <input
                className="form-control"
                type="text"
                placeholder="eg: 2005"
                value={seriesRecord.startingYear}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group mb-3" controlId="seriesSeason">
              <label className="form-label">Series Season</label>
              <select
                className="form-control"
                aria-label="series-season"
                value={seriesRecord.season}
              >
                <option value="Season 1">Season 1</option>
                <option value="Season 2">Season 2</option>
                <option value="Season 3">Season 3</option>
                <option value="Season 4">Season 4</option>
                <option value="Season 5">Season 5</option>
              </select>
            </div>
          </div>
          <div class="form-check form-switch mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckReverse"
            />
            <label class="form-check-label" for="flexSwitchCheckReverse">
              Watched (yes or no?)
            </label>
          </div>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </div>
      <div className="row justify-content-center mx-auto">
        <div className="col-md">
          <table>
            <tr>
              <th>Series Name</th>
              <td>{localStorage.getItem("series")}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddSeries;
