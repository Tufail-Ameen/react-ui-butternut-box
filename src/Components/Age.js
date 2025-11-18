import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

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
      <div className="row m-0 p-0">
        <div className="col-12 bodr">
          <div className="text-center d-flex flex-column align-items-center gap-4 py-3">
            <div className="mt-2 mainheading">is</div>
            <div className=" d-flex flex-row gap-3">
              <Button />
              <Button />
              <Button />
            </div>
            <div className="d-flex flex-row align-items-center gap-2 bodr">
              <input
                id="ex1-years"
                className="form-control centerInputs"
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
              {/* <div className="row mt-4 mb-5 bodr">
                <div className="col-5"></div>
                <div className="col-6"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row text-center mt-3">
        <span className="mt-3 pt-3" id="inputheading1">
          ------------------------- Kylan Watkins is...
          -------------------------
        </span>
      </div>

      <div class="radiobtn mt-3 bodr">
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

      <div className="row mt-4 mb-5 bodr">
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
      </div> */}
    </>
  );
}
