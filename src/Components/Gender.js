import React from "react";
import { useNavigate } from "react-router-dom";

export default function Gender(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/Age");
  };

  const handelbackbtn = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container-fluid">
        {/* Center Part */}
        <div className="row text-center mt-3">
          <span className="mt-3 pt-3" id="inputheading1">
            ------------------------- Kylan Watkins is a good...
            -------------------------
          </span>
        </div>

        <div class="container mt-3">
          <div class="button-wrap">
            <input
              class="hidden radio-label"
              id="girl-button"
              type="radio"
              name="gender"
              checked
            />
            <label class="button-label" for="girl-button">
              <h1>Girl</h1>
            </label>
            <input
              class="hidden radio-label"
              id="boy-button"
              type="radio"
              name="gender"
            />
            <label class="button-label" for="boy-button">
              <h1>Boy</h1>
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col-5"></div>
          <div className="col-2 mt-3 mb-3">
            <span id="inputheading2">and is he neutered?</span>
          </div>
        </div>

        <div class="container">
          <div class="button-wrap">
            <input
              class="hidden radio-label"
              id="yes-button"
              type="radio"
              name="neutered"
            />
            <label class="button-label" for="yes-button">
              <h1>Yes</h1>
            </label>
            <input
              class="hidden radio-label"
              id="no-button"
              type="radio"
              name="neutered"
              checked
            />
            <label class="button-label" for="no-button">
              <h1>No</h1>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
