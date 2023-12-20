import React, { useState, useEffect } from "react";

function AddSeries() {
  const seriesItems = JSON.parse(localStorage.getItem("seriesRecords"));

  const [seriesInfo, setSeriesInfo] = useState({
    name: undefined,
    startingYear: undefined,
    season: undefined,
    watched: false,
  });

  const [seriesRecords, setSeriesRecords] = useState(seriesItems || []);

  const saveSeriesInfo = (e) => {
    e.preventDefault();
    setSeriesRecords((prevRecords) => [...prevRecords, seriesInfo]);
  };

  useEffect(() => {
    localStorage.setItem("seriesRecords", JSON.stringify(seriesRecords));
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
                className="form-select"
                aria-label="series-season"
                value={seriesInfo.season}
                onChange={(e) =>
                  setSeriesInfo({ ...seriesInfo, season: e.target.value })
                }
              >
                <option selected>Select Season</option>
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
      <div className="row justify-content-center mx-auto mt-3">
        <div className="col-md">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Series Name</th>
                <th>Starting Year</th>
                <th>Season</th>
                <th>Watched</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {seriesRecords &&
                seriesRecords.map(function (series, idx) {
                  return (
                    <tr>
                      <td>{idx + 1}</td>
                      <td>{series.name}</td>
                      <td>{series.startingYear}</td>
                      <td>{series.season}</td>
                      <td>{series.watched ? "✅" : "❌"}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddSeries;
