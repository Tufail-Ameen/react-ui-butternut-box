import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HowActive(props) {
  let navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState();
  const [text, setText] = useState("");

  const styles = {
    border: "2px solid #5D92B8",
    color: "#174F78",
  };

  const wrtiien = {
    a: "A serial snoozer Under 30min walks per day",
    b: "Somewhat active 0.5 - 1hr walks per day",
    c: "Active 1-2hr walks per day",
    d: "Very active 2-3hr walks per day",
    e: "Full of energy More than 3hr walks per day",
  };

  const handleclickbtn = () => {
    navigate("/FoodAllergies");
  };

  const handelbackbtn = () => {
    navigate("/Weight");
  };

  const handel1stpic = (a) => {
    setSelectedImage(a);
    setText(a);
  };

  return (
    <>
      <div className="container-fluid">
        {/* Center Part */}
        <div className="row text-center mt-3">
          <span className="mt-3 pt-3 pb-4" id="inputheading1">
            ------------------------- Fuller Boyd is...
            -------------------------
          </span>
        </div>

        <div className="row">
          <div className="col-5"></div>
          <div className="col-3 px-4">
            <div class="form-check ">
              <input
                class="form-check-input mx-2 "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <span class="form-check-label spanworking" for="flexCheckDefault">
                A working dog
              </span>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-1"></div>
          <div className="col-2">
            <img
              src="../1.1.svg"
              onClick={() => handel1stpic(1)}
              className="img-fluid"
              style={selectedImage == 1 ? styles : {}}
              alt="Image Not Found"
            />
          </div>

          <div className="col-2">
            <img
              src="../1.2.svg"
              onClick={() => handel1stpic(2)}
              className="img-fluid"
              alt="Image Not Found"
              style={selectedImage == 2 ? styles : {}}
            />
          </div>

          <div className="col-2">
            <img
              src="../1.3.svg"
              onClick={() => handel1stpic(3)}
              className="img-fluid"
              alt="Image Not Found"
              style={selectedImage == 3 ? styles : {}}
            />
          </div>

          <div className="col-2">
            <img
              src="../1.4.svg"
              onClick={() => handel1stpic(4)}
              className="img-fluid"
              alt="Image Not Found"
              style={selectedImage == 4 ? styles : {}}
            />
          </div>

          <div className="col-2">
            <img
              src="../1.5.svg"
              onClick={() => handel1stpic(5)}
              className="img-fluid"
              alt="Image Not Found"
              style={selectedImage == 5 ? styles : {}}
            />
          </div>
        </div>

        {/* Print text using state */}
        <div className="row">
          <div className="col-1"></div>
          <div id="threetext" className="col-10 text-center m-4 p-5">
            {text == 1 ? wrtiien.a : ""}
            {text == 2 ? wrtiien.b : ""}
            {text == 3 ? wrtiien.c : ""}
            {text == 4 ? wrtiien.d : ""}
            {text == 5 ? wrtiien.e : ""}
          </div>
        </div>
      </div>
    </>
  );
}
