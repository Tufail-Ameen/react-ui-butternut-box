import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BodyLook(props) {
  let navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState();
  const [text, setText] = useState("");

  const styles = {
    border: "2px solid #5D92B8",
    color: "#174F78",
  };

  const wrtiien = {
    a: "A little skinny Narrow waistline and you can clearly see her ribs.",
    b: "Just right Visible waistline with some fat cover but her ribs are easy to feel.",
    c: "A bit chubby Waistline is not visible and her ribs are tricky to feel.",
  };

  const handleclickbtn = () => {
    navigate("/Weight");
  };

  const handelbackbtn = () => {
    navigate("/ImportantThing");
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
          <div className="col-3"></div>
          <div className="col-2">
            <div>
              <img
                src="../Puppy 1.svg"
                onClick={() => handel1stpic(1)}
                className="img-fluid"
                style={selectedImage == 1 ? styles : {}}
                alt="Image Not Found"
              />
            </div>
          </div>
          <div className="col-2">
            <img
              src="../Puppy 2.svg"
              onClick={() => handel1stpic(2)}
              className="img-fluid"
              alt="Image Not Found"
              style={selectedImage == 2 ? styles : {}}
            />
          </div>
          <div className="col-2">
            <img
              src="../Puppy 3.svg"
              onClick={() => handel1stpic(3)}
              className="img-fluid"
              alt="Image Not Found"
              style={selectedImage == 3 ? styles : {}}
            />
          </div>
        </div>

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
