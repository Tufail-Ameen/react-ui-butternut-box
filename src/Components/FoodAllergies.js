import React from "react";
import { useNavigate } from "react-router-dom";

export default function FoodAllergies(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/HealthIssues");
  };

  const handelbackbtn = () => {
    navigate("/HowActive");
  };
  return (
    <>
      <div className="container-fluid">
        {/* Center Part */}
        <div className="row text-center mt-3">
          <span className="mt-3 pt-3 pb-4" id="inputheading1">
            ------------------------- Fuller Boyd is sensitive or allergic to...
            -------------------------
          </span>
        </div>

        <div class="row ">
          <ul class="ks-cboxtags ">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-8">
                <li>
                  <input
                    type="checkbox"
                    id="checkboxOne"
                    value="Rainbow Dash"
                  />
                  <label for="checkboxOne">Nothing</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkboxTwo"
                    value="Cotton Candy"
                    checked
                  />
                  <label for="checkboxTwo">Beef</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkboxThree"
                    value="Rarity"
                    checked
                  />
                  <label for="checkboxThree">Chicken</label>
                </li>
                <li>
                  <input type="checkbox" id="checkboxFour" value="Moondancer" />
                  <label for="checkboxFour">Turkey</label>
                </li>
                <li>
                  <input type="checkbox" id="checkboxFive" value="Surprise" />
                  <label for="checkboxFive">Lamb</label>
                </li>
              </div>
            </div>

            <div className="row">
              <div className="col-4"></div>
              <div className="col-8">
                <li>
                  <input
                    type="checkbox"
                    id="checkboxSix"
                    value="Twilight Sparkle"
                    checked
                  />
                  <label for="checkboxSix">Fish</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkboxSeven"
                    value="Fluttershy"
                  />
                  <label for="checkboxSeven">Pork</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkboxEight"
                    value="Derpy Hooves"
                  />
                  <label for="checkboxEight">Duck</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkboxNine"
                    value="Princess Celestia"
                  />
                  <label for="checkboxNine">Venison</label>
                </li>
              </div>
            </div>

            <div className="row">
              <div className="col-3"></div>
              <div className="col-8">
                <li>
                  <input type="checkbox" id="checkboxTen" value="Gusty" />
                  <label for="checkboxTen">Pearl barley</label>
                </li>
                <li class="ks-selected">
                  <input type="checkbox" id="checkboxEleven" value="Discord" />
                  <label for="checkboxEleven">Quinoa</label>
                </li>
                <li>
                  <input type="checkbox" id="checkboxTwelve" value="Clover" />
                  <label for="checkboxTwelve">Wild boar</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="checkboxThirteen"
                    value="Baby Moondancer"
                  />
                  <label for="checkboxThirteen">Guinea fowl</label>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
