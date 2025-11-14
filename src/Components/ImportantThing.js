import React from "react";
import { useNavigate } from "react-router-dom";

export default function ImportantThing(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/BodyLook");
  };

  const handelbackbtn = () => {
    navigate("/FussyEater");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row w-100">
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <div class="radio">
              <form>
                <label>
                  <input type="radio" name="radio" />
                  <span>
                    The ease of ordering and receiving it (just when I need it).
                  </span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>The food meets her special health needs.</span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>
                    The food contains the best ingredients for Fuller Boyd.
                  </span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>
                    Fuller Boyd loves the taste of the food and is happy to eat
                    it.
                  </span>
                </label>
              </form>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
