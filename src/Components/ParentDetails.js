import React from "react";
import { useNavigate } from "react-router-dom";

export default function ParentDetails(props) {
  let navigate = useNavigate();

  const handelbackbtn = () => {
    navigate("/AnyTreats");
  };

  return (
    <>
      <div className="container-fluid">
        {/* 2 Inputs Name n Email */}
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 mt-4">
            <div class="mb-3">
              <label
                for="exampleFormControlInput1"
                id="labelparent"
                class="form-label"
              >
                Your name
              </label>
              <input
                type="text"
                class="form-control p-3"
                id="exampleFormControlInput1"
                placeholder="e.g.Elle Woods"
              />
            </div>

            <label
              for="exampleFormControlInput1"
              id="labelparent"
              class="form-label"
            >
              Your email
            </label>
            <input
              type="email"
              class="form-control p-3"
              id="exampleFormControlInput1"
              placeholder="e.g.bruisersmum@woofmail.com"
            />
          </div>
        </div>
      </div>
    </>
  );
}
