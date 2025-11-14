import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AnyTreats(props) {
  let navigate = useNavigate();
  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const wrtiien = {
    a: "Doesn't eat any",
    b: "Has some 1-3 times a day",
    c: "Has lots 4+ times a day",
  };

  const styles = {
    border: "2px solid #5D92B8",
    color: "#174F78",
  };

  const handleclickbtn = () => {
    navigate("/ParentDetails");
  };

  const handelbackbtn = () => {
    navigate("/HealthIssues");
  };

  const handelclick = (e) => {
    setSelectedImage(e);
    setText(e);
  };
  return (
    <>
      <div className="container-fluid">
        {/* Center Part */}
        <div className="row text-center mt-3">
          <span className="mt-3 pt-3" id="inputheading1">
            ------------------------- Fuller Boyd... -------------------------
          </span>
        </div>

        {/* 3 Images Attach */}
        <div className="row">
          <div className="col-3"></div>
          <div className="col-2">
            <img
              src="../2.1.svg"
              className="img-fluid"
              onClick={() => handelclick(1)}
              style={selectedImage == 1 ? styles : {}}
              alt="Image Not Found"
            />
          </div>
          <div className="col-2 pt-4">
            <img
              src="../2.2.svg"
              className="img-fluid"
              onClick={() => handelclick(2)}
              style={selectedImage == 2 ? styles : {}}
              alt="Image Not Found"
            />
          </div>
          <div className="col-2 pt-4">
            <img
              src="../2.3.svg"
              className="img-fluid"
              onClick={() => handelclick(3)}
              style={selectedImage == 3 ? styles : {}}
              alt="Image Not Found"
            />
          </div>
        </div>

        {/* Print text using state */}
        <div className="row">
          <div className="col-3"></div>
          <div id="threetext" className="col-6 text-center m-4 p-5">
            {text == 1 ? wrtiien.a : ""}
            {text == 2 ? wrtiien.b : ""}
            {text == 3 ? wrtiien.c : ""}
          </div>
        </div>
      </div>
    </>
  );
}
