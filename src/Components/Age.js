import React from "react";
import { useNavigate } from "react-router-dom";

export default function Age(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/Breed");
  };

  const handelbackbtn = () => {
    navigate("/Gender");
  };
  return (
    <>
      <div className="container-fluid">
        {/* Center Part */}
        <div className="row text-center mt-3">
          <span className="mt-3 pt-3" id="inputheading1">
            ------------------------- Kylan Watkins is...
            -------------------------
          </span>
        </div>

        <div class="radiobtn mt-3">
          <div class="button-wrap">
            <input
              class="hidden radio-label"
              type="radio"
              name="puppy"
              id="yes-button"
            />
            <label class="button-label" for="yes-button">
              <h1>A Puppy</h1>
            </label>
            <input
              class="hidden radio-label"
              type="radio"
              name="puppy"
              id="no-button"
            />
            <label class="button-label" for="no-button">
              <h1>An adult</h1>
            </label>
            <input
              class="hidden radio-label"
              type="radio"
              name="puppy"
              id="maybe-button"
              checked
            />
            <label class="button-label" for="maybe-button">
              <h1>A senior</h1>
            </label>
          </div>
        </div>

        <div className="row mt-4 mb-5">
          <div className="col-5"></div>
          <div className="col-6">
            <input
              className="form-control centerInputs"
              id="ex1-years"
              type="number"
              placeholder="0"
            />
            <label className="inputslabels mx-2" htmlFor="ex1-years">
              years
            </label>

            <input
              className="form-control centerInputs "
              id="ex1-months"
              type="number"
              placeholder="0"
            />
            <label className="inputslabels mx-2" htmlFor="ex1-months">
              months
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
