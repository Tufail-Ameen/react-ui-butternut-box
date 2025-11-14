import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HealthIssues(props) {
  let navigate = useNavigate();
  const [clr, setClr] = useState();

  const styles = {
    color: "white",
    backgroundColor: "#11486E",
  };

  const handleclickbtn = () => {
    navigate("/AnyTreats");
  };

  const handelbackbtn = () => {
    navigate("/FoodAllergies");
  };

  const handlbtn = (a) => {
    setClr(a);
  };
  return (
    <>
      <div className="container-fluid">
        {/* Center Part */}
        <div className="row text-center mt-3">
          <span className="mt-3 pt-3 pb-4" id="inputheading1">
            ------------------------- Fuller Boyd has...
            -------------------------
          </span>
        </div>

        {/* 2 Buttons */}
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <button
              type="button"
              onClick={() => handlbtn(1)}
              style={clr == 1 ? styles : {}}
              class="btn mx-2 py-3 btnclr"
            >
              No health issues
            </button>
            <button
              type="button"
              onClick={() => handlbtn(2)}
              style={clr == 2 ? styles : {}}
              class="btn py-3 btnclr"
            >
              Some health issues
            </button>
          </div>
        </div>

        {/* Input Box */}
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 mt-4 ml-5">
            <div class="mb-3">
              <input
                type="text"
                class="form-control py-3"
                id="exampleInputEmail1"
                placeholder="Fuller Body's health issue"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
