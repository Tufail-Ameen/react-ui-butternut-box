import React from 'react'
import { useNavigate } from "react-router-dom";


export default function FoodAllergies(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/HealthIssues")
  }

  const handelbackbtn = () => {
    navigate("/HowActive")
  }
  return (
    <>
      <div className='container-fluid' >
        {/* 1st Row */}
        <div className='row' >
          <div className='col-2 '  >
            <div className='mx-2 text-start pt-3' id='navheadind'>
              Butternut <br /> Box</div>
          </div>
          <div className='col-7' ></div>
                    <div className='col-3'>
                        {/* Badges */}
                        <div className='text-end mt-3' >
                            <span id='badgeset1' class="badge badge-danger border mx-1">25% OFF</span>
                            <span id='badgeset2' class="badge badge-danger border">25% OFF</span>
                        </div>
                        <span id='badgetext'>Your dog will thank you later</span>
                    </div>
        </div>

        {/* Progress Bar */}
        <div class="progress mt-3">
          <div id='progressbar' class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuemin="25" aria-valuemax="100" style={{ width: "1050px" }} aria-valuenow="25" ></div>
        </div>

        {/* 2nd Row */}
        <div className='row mb-3'>
          <div className='col mt-3' id='headingbg'>
            <h1 id='headingcolor' className='' >Does {props.name} have any food allergies or <br /> sensitivities?</h1>
            <p id='smallheading' className='text-center pb-5'>Even though our meals are hypoallergenic with no added wheat, maize, soy or mystery <br /> ingredients, we like to make sure all recipes are right for your pooch</p>
          </div>
        </div>


        {/* Center Part */}
        <div className='row text-center mt-3' >
          <span className='mt-3 pt-3 pb-4' id='inputheading1'>-------------------------  Fuller Boyd is sensitive or allergic to...  -------------------------</span>
        </div>

        <div class="row ">
          <ul class="ks-cboxtags ">
            <div className='row' >
              <div className='col-3' ></div>
              <div className='col-8' >
                <li><input type="checkbox" id="checkboxOne" value="Rainbow Dash" />
                  <label for="checkboxOne">Nothing</label></li>
                <li><input type="checkbox" id="checkboxTwo" value="Cotton Candy" checked /><label for="checkboxTwo">Beef</label></li>
                <li><input type="checkbox" id="checkboxThree" value="Rarity" checked /><label for="checkboxThree">Chicken</label></li>
                <li><input type="checkbox" id="checkboxFour" value="Moondancer" /><label for="checkboxFour">Turkey</label></li>
                <li><input type="checkbox" id="checkboxFive" value="Surprise" /><label for="checkboxFive">Lamb</label></li>
              </div>
            </div>

            <div className='row' >
              <div className='col-4' ></div>
              <div className='col-8' >
                <li><input type="checkbox" id="checkboxSix" value="Twilight Sparkle" checked /><label for="checkboxSix">Fish</label></li>
                <li><input type="checkbox" id="checkboxSeven" value="Fluttershy" /><label for="checkboxSeven">Pork</label></li>
                <li><input type="checkbox" id="checkboxEight" value="Derpy Hooves" /><label for="checkboxEight">Duck</label></li>
                <li><input type="checkbox" id="checkboxNine" value="Princess Celestia" /><label for="checkboxNine">Venison</label></li>
              </div>
            </div>

            <div className='row' >
              <div className='col-3' ></div>
              <div className='col-8' >
                <li><input type="checkbox" id="checkboxTen" value="Gusty" /><label for="checkboxTen">Pearl barley
                </label></li>
                <li class="ks-selected"><input type="checkbox" id="checkboxEleven" value="Discord" /><label for="checkboxEleven">Quinoa</label></li>
                <li><input type="checkbox" id="checkboxTwelve" value="Clover" /><label for="checkboxTwelve">Wild boar
                </label></li>
                <li><input type="checkbox" id="checkboxThirteen" value="Baby Moondancer" /><label for="checkboxThirteen">Guinea fowl
                </label></li>
              </div>
            </div>
          </ul>
        </div>

        {/* 4th Row */}
        <div className='row' id='FreshFact' >
          <div className='col-2' ></div>
          <div className='col-7 pt-3 pb-3' id='colorfreshfact'>
            <h2>Fresh Fact</h2>
            <p>
              Having allergies shouldn't stop your dog from enjoying a fresh diet, so we tailor your selection to suit your pup's needs. In fact, we feed over 35,000 dogs with allergies.
            </p>
          </div>
          <div className='col3' ></div>
        </div>

        {/* 5th Row */}
        <div className='row' id='footer' >
          <div className='col-4'></div>
          <div className='col-4'>
            <a href="#" onClick={handelbackbtn} class="previous mt-3 mb-3">&laquo; Back</a>
            <a href="#" onClick={handleclickbtn} class="next mt-3 mb2">Continue &raquo;</a>
          </div>
        </div>
      </div>

    </>
  )
}
