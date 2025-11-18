import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

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
      <div className="row m-0 p-0">
        <div className="col-12 bodr">
          <div className="text-center d-flex flex-column align-items-center gap-4 py-3">
            <div className="mt-2 mainheading">is a good </div>
            <div className=" d-flex flex-row gap-3">
              <Button />
              <Button />
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <div className="subheading">and is he neutered?</div>
              <div className=" d-flex flex-row gap-3">
                <Button />
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container mt-3 bodr">
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
      </div> */}

      {/* <div class="container">
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
      </div> */}
    </>
  );
}
