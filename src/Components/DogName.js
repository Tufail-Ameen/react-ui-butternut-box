import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { dogNameAction } from "../Redux/Slice/NameSlice";

export default function DogName(props) {
  // const [name, setName] = useState("");
  const [dogNames, setDogNames] = useState([]);
  const [showFocus, setShowFocus] = useState("");

  const dispatch = useDispatch();

  // const handelchangeevent = (e) => {
  //   setName(e.target.value);
  // };

  // const handleChangeEvent = (e, index) => {
  //   const updatedNames = [...dogNames];
  //   updatedNames[index] = e.target.value;
  //   setDogNames(updatedNames);
  // };

  const handleAnotherDogClick = (e) => {
    e.preventDefault();
    setDogNames([...dogNames, ""]);
  };

  const handleClearInput = (index) => {
    const updatedNames = [...dogNames];
    updatedNames[index] = "";
    setDogNames(updatedNames);
  };

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="row py-2">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="dogname-box border p-3">
                <div className="">
                  <FontAwesomeIcon icon={faXmark} />
                </div>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                  id="labelclr1"
                >
                  My dog is called...
                </label>
                <input
                  onChange={(e) => dispatch(dogNameAction(e.target.value))}
                  // value={name}
                  className="form-control form-control-lg border"
                  type="text"
                  placeholder="Your dog's name"
                  aria-label=".form-control-lg example"
                  name="day"
                  onFocus={() => setShowFocus("day")}
                  onBlur={() => setShowFocus("")}
                  style={{
                    boxShadow:
                      showFocus === "day"
                        ? "0px 0px 0px 2px rgb(23, 79, 120)"
                        : "0px 0px 0px 1px #5D92B8",
                  }}
                />
              </div>

              <div className="mt-2 text-end">
                <a
                  id="labelclr"
                  className=""
                  onClick={handleAnotherDogClick}
                  href=""
                >
                  I have another dog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {dogNames.map((dogName, index) => (
        <div className="row" key={index}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="row py-2">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className="dogname-box border p-3">
                  <div className="">
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                  <label
                    htmlFor={`exampleFormControlInput${index}`}
                    className="form-label"
                    id="labelclr1"
                  >
                    My dog is called...
                  </label>
                  <input
                    onChange={(e) => dispatch(dogNameAction(e.target.value))}
                    // value={dogName}
                    id={`boxshadowhandel${index}`}
                    className="form-control form-control-lg border"
                    type="text"
                    placeholder="Your dog's name"
                    aria-label=".form-control-lg example"
                    name="day1"
                    onFocus={() => setShowFocus("day1")}
                    onBlur={() => setShowFocus("")}
                    style={{
                      boxShadow:
                        showFocus === "day1"
                          ? "0px 0px 0px 2px rgb(23, 79, 120)"
                          : "0px 0px 0px 1px #5D92B8",
                    }}
                  />
                </div>

                <div className="mt-2 text-end">
                  <a
                    id="labelclr"
                    className=""
                    onClick={handleAnotherDogClick}
                    href=""
                  >
                    I have another dog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
