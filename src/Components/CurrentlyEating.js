import React from "react";
import { useNavigate } from "react-router-dom";

export default function CurrentlyEating(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/FussyEater");
  };

  const handelbackbtn = () => {
    navigate("/Breed");
  };
  return (
    <>
      <div className="container-fluid">
        {/* Center Part */}
        <div className="row text-center mt-3">
          <span className="mt-3 pt-3" id="inputheading1">
            ------------------------- Kylan Watkins eats...
            -------------------------
          </span>
        </div>

        <div className="row text-center">
          <ul class="ks-cboxtags pt-3">
            <li>
              <input type="checkbox" id="checkboxOne" value="Rainbow Dash" />
              <label for="checkboxOne">Dry</label>
            </li>
            <li>
              <input type="checkbox" id="checkboxTwo" value="Cotton Candy" />
              <label for="checkboxTwo">Wet</label>
            </li>
            <li>
              <input type="checkbox" id="checkboxThree" value="Rarity" />
              <label for="checkboxThree">Raw</label>
            </li>
            <li>
              <input type="checkbox" id="checkboxFour" value="Moondancer" />
              <label for="checkboxFour">Home-cooked</label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
