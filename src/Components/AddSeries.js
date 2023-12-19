import React, { useState, useEffect } from "react";

function AddSeries() {
  const [seriesInfo, setSeriesInfo] = useState({
    name: undefined,
    startingYear: undefined,
    season: undefined,
    watched: false,
  });

  const [seriesRecords, setSeriesRecords] = useState([]);

  const saveSeriesInfo = (e) => {
    e.preventDefault();
    setSeriesRecords((prevRecords) => [...prevRecords, seriesInfo]);
  };

  useEffect(() => {
    localStorage.setItem("seriesRecords", JSON.stringify(seriesRecords));
    if (localStorage.getItem("seriesRecords").length !== 0) {
      setSeriesRecords(localStorage.getItem("seriesRecords"));
    }
  }, [seriesRecords]);

  return (
    <div className="container">
      <div className="row">
        <form>
          <div className="col-md-4">
            <div className="form-group mb-3">
              <label className="form-label">Series Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="eg: Teen Wolf"
                value={seriesInfo.name}
                onChange={(e) =>
                  setSeriesInfo({ ...seriesInfo, name: e.target.value })
                }
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
                value={seriesInfo.startingYear}
                onChange={(e) =>
                  setSeriesInfo({ ...seriesInfo, startingYear: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group mb-3">
              <label className="form-label">Series Season</label>
              <select
                className="form-control"
                aria-label="series-season"
                value={seriesInfo.season}
                onChange={(e) =>
                  setSeriesInfo({ ...seriesInfo, season: e.target.value })
                }
              >
                <option value="Season 1">Season 1</option>
                <option value="Season 2">Season 2</option>
                <option value="Season 3">Season 3</option>
                <option value="Season 4">Season 4</option>
                <option value="Season 5">Season 5</option>
              </select>
            </div>
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckReverse"
              checked={seriesInfo.watched}
              onChange={(e) =>
                setSeriesInfo({ ...seriesInfo, watched: e.target.checked })
              }
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckReverse"
            >
              Watched (yes or no?)
            </label>
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={saveSeriesInfo}
          >
            Save
          </button>
        </form>
      </div>
      <div className="row justify-content-center mx-auto">
        <div className="col-md">
          <table>
            <thead>
              <tr>
                <th>Series Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{localStorage.getItem("seriesRecords")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddSeries;
