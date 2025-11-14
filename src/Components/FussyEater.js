import React from "react";
import { useNavigate } from "react-router-dom";

export default function FussyEater(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/ImportantThing");
  };

  const handelbackbtn = () => {
    navigate("/CurrentlyEating");
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
          {/* <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /> */}
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <div class="radio">
              <form>
                <label>
                  <input type="radio" name="radio" />
                  <span>
                    A foodie <br /> Loves eating just about anything{" "}
                  </span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>
                    A good eater <br /> Knows what she likes and isn’t
                    adventurous with food
                  </span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>
                    Can be fussy <br /> Abandons her meals sometimes
                  </span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>
                    Very fussy <br /> Repeatedly refuses meals
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
