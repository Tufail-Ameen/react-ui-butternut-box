import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Weight(props) {
  let navigate = useNavigate();
  const [weight, setWeight] = useState(0);

  const handleSliderChange = (event) => {
    const newWeight = event.target.value;
    setWeight(newWeight);
  };

  const handleclickbtn = () => {
    navigate("/HowActive");
  };

  const handelbackbtn = () => {
    navigate("/BodyLook");
  };

  return (
    <>
      <div className="container-fluid">
        {/* Center Part */}
        <div className="row text-center mt-3">
          <span className="mt-3 pt-3 pb-4" id="inputheading1">
            ------------------------- Fuller Boyd weighs about...
            -------------------------
          </span>
        </div>

        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <input
                  className="form-control centerInputs mx-2"
                  id="ex1-years"
                  type="number"
                  value={weight}
                  onChange={handleSliderChange}
                  placeholder="0"
                />
                <label className="inputslabels" htmlFor="ex1-years">
                  Kg
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-3"></div>
          <div className="col-1">
            <img src="../1.svg" className="img-fluid" alt="Image Not Found" />
          </div>
          <div className="col-1">
            <img src="../2.svg" className="img-fluid" alt="Image Not Found" />
          </div>
          <div className="col-1">
            <img src="../3.svg" className="img-fluid" alt="Image Not Found" />
          </div>
          <div className="col-1">
            <img src="../4.svg" className="img-fluid" alt="Image Not Found" />
          </div>
          <div className="col-1">
            <img src="../5.svg" className="img-fluid" alt="Image Not Found" />
          </div>
          <div className="col-1">
            <img src="../6.svg" className="img-fluid" alt="Image Not Found" />
          </div>
          <div className="col-1">
            <img src="../7.svg" className="img-fluid" alt="Image Not Found" />
          </div>
        </div>

        <div className="row">
          <div className="col-3"></div>
          <div className="col-7">
            {/* <label for="customRange2" class="form-label">range</label> */}
            <input
              type="range"
              class="form-range mt-3"
              min="0"
              max="50"
              id="customRange2"
              onChange={handleSliderChange}
              value={weight}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-4"></div>
          <div className="col-5 pt-4 pb-3">
            <p id="clr">
              Use the slider above to give us her approximate weight.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
