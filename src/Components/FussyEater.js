import React from 'react'
import { useNavigate } from "react-router-dom";


export default function FussyEater(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/ImportantThing")
  }

  const handelbackbtn = () => {
    navigate("/CurrentlyEating")
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
          <div id='progressbar' class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuemin="25" aria-valuemax="100" style={{ width: "550px" }} aria-valuenow="25" ></div>
        </div>

        {/* 2rd Row */}
        <div className='row mb-3'>
          <div className='col' id='headingbg'>
            <h1 id='headingcolor' className='py-2' >Is {props.name} a fussy eater?</h1>
            <p id='smallheading' className='text-center pb-5' >We're sure he will love Butternut at first bite, but we always like to check a dog's eating habits <br /> just in case.</p>
          </div>
        </div>

        {/* Center Part */}
        <div className='row text-center mt-3' >
          <span className='mt-3 pt-3 pb-4' id='inputheading1'>-------------------------  Fuller Boyd is...  -------------------------</span>
        </div>

        <div className='row' >
          {/* <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /> */}
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <div class="radio">
              <form>
                <label>
                  <input type="radio" name="radio" />
                  <span>A foodie <br /> Loves eating just about anything </span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>A good eater <br /> Knows what she likes and isn’t adventurous with food</span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>Can be fussy <br /> Abandons her meals sometimes</span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>Very fussy <br /> Repeatedly refuses meals</span>
                </label>
              </form>
            </div>
          </label>
        </div>


        {/* 4th Row */}
        <div className='row' id='FreshFact' >
          <div className='col-2' ></div>
          <div className='col-7 pt-3 pb-3' id='colorfreshfact'>
            <h2>Fresh Fact</h2>
            <p>
              In the early 1900s, Milk-Bones were the dog food of the day, made from - you guessed it - milk. Not quite the tasty, nutritious meals our Butternutters are used to.
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
