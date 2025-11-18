import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import DogName from "../Components/DogName";
import HowActive from "../Components/HowActive";
import ImportantThing from "../Components/ImportantThing";
import ParentDetails from "../Components/ParentDetails";
import HealthIssues from "../Components/HealthIssues";
import Gender from "../Components/Gender";
import FussyEater from "../Components/FussyEater";
import FoodAllergies from "../Components/FoodAllergies";
import Weight from "../Components/Weight";
import BodyLook from "../Components/BodyLook";
import Breed from "../Components/Breed";
import AnyTreats from "../Components/AnyTreats";
import CurrentlyEating from "../Components/CurrentlyEating";
import Age from "../Components/Age";
import logo from "../assets/images/logo.webp";

export default function Layout(props) {
  const [letstartbtn, setLetstartbtn] = useState(true);
  const [showBackButton, setShowBackButton] = useState(false);

  let navigate = useNavigate();
  let location = useLocation();

  // Define the sequence of all screens
  const screenSequence = [
    "/",
    "/Gender",
    "/Age",
    "/Breed",
    "/CurrentlyEating",
    "/FussyEater",
    "/ImportantThing",
    "/BodyLook",
    "/Weight",
    "/HowActive",
    "/FoodAllergies",
    "/HealthIssues",
    "/AnyTreats",
    "/ParentDetails",
  ];

  // Update button visibility based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setLetstartbtn(true);
      setShowBackButton(false);
    } else {
      setLetstartbtn(false);
      setShowBackButton(true);
    }
  }, [location.pathname]);

  const handleletstartbtn = (e) => {
    e.preventDefault();

    if (letstartbtn) {
      // First screen - "LET'S START" button
      setLetstartbtn(false);
      setShowBackButton(true);
      navigate("/Gender");
    } else {
      // Continue button - navigate to next screen
      const currentPath = location.pathname;
      const currentIndex = screenSequence.indexOf(currentPath);

      if (currentIndex !== -1 && currentIndex < screenSequence.length - 1) {
        const nextPath = screenSequence[currentIndex + 1];
        navigate(nextPath);
      }
    }
  };

  const handelbackbtn = (e) => {
    e.preventDefault();
    const currentPath = location.pathname;
    const currentIndex = screenSequence.indexOf(currentPath);

    if (currentIndex > 0) {
      const previousPath = screenSequence[currentIndex - 1];
      navigate(previousPath);

      // If going back to first screen, hide back button
      if (previousPath === "/") {
        setShowBackButton(false);
        setLetstartbtn(true);
      }
    }
  };

  return (
    <>
      <div className="container-fluid m-0 p-0">
        {/* Navbar */}
        <div className="row m-0 p-0">
          <div className="col-md-12 ">
            <div className="row seperator">
              <div className="col-4 col-sm-4 col-md-3">
                <img src={logo} alt="image not found" className="logo" />
              </div>

              <div className="d-none d-md-block col-md-5"></div>

              <div className="col-8 col-sm-8 col-md-4">
                <div className="text-end p-2 ">
                  <div className="">
                    <span id="badgeset1" class="badge badge-danger border mx-1">
                      25% OFF
                    </span>
                    <span id="badgeset2" class="badge badge-danger border">
                      25% OFF
                    </span>
                  </div>
                  <span className="badgetext">
                    Your dog will thank you later
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress mt-2">
          <div
            id="progressbar"
            className="progress-bar"
            role="progressbar"
            aria-label="Basic example"
            aria-valuemin="25"
            aria-valuemax="100"
            style={{ width: "50px" }}
            aria-valuenow="25"
          ></div>
        </div>

        <div className="row m-0 p-0">
          <div className="col border" id="headingbg">
            <h1 id="headingcolor" className="pt-5">
              First, what's your dog's name?
            </h1>
          </div>
        </div>

        <div className="routes-container bodr">
          <Routes>
            <Route path="/" element={<DogName />} />
            <Route path="/Gender" element={<Gender />} />
            <Route path="/Age" element={<Age />} />
            <Route path="/Breed" element={<Breed />} />
            <Route path="/CurrentlyEating" element={<CurrentlyEating />} />
            <Route path="/FussyEater" element={<FussyEater />} />
            <Route path="/ImportantThing" element={<ImportantThing />} />
            <Route path="/BodyLook" element={<BodyLook />} />
            <Route path="/Weight" element={<Weight />} />
            <Route path="/HowActive" element={<HowActive />} />
            <Route path="/FoodAllergies" element={<FoodAllergies />} />
            <Route path="/HealthIssues" element={<HealthIssues />} />
            <Route path="/AnyTreats" element={<AnyTreats />} />
            <Route path="/ParentDetails" element={<ParentDetails />} />
          </Routes>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-container">
        <div className="row m-0 p-0 bottom-tagline">
          <div className="col-md-2"></div>
          <div className="col-md-7 pt-3 pb-3" id="colorfreshfact">
            <h2>Fresh Fact</h2>
            <p>
              The story of Butternut Box begins with a farting Staffie called
              Rudie. Only home-cooked meals could help her terrible farts, and
              the rest, as they say, is history.
            </p>
          </div>
          <div className="col3"></div>
        </div>

        {letstartbtn && (
          <div className="row m-0 p-0 buttons-container">
            <div className="col-md-5"></div>
            <div className="col-md-2 d-flex justify-content-center">
              <button
                onClick={handleletstartbtn}
                type="button"
                className="btn letstartbtn btn-sm py-1 px-1 m-3"
              >
                LET'S START
              </button>
            </div>
          </div>
        )}

        {showBackButton && (
          <div className="row m-0 p-0 buttons-container">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <a href="#" onClick={handelbackbtn} class="previous mt-3 mb-3">
                &laquo; Back
              </a>
              <a href="#" onClick={handleletstartbtn} class="next mt-3 mb2">
                Continue &raquo;
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
