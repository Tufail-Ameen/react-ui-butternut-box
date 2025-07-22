import React from 'react'
import { useNavigate } from "react-router-dom";


export default function ImportantThing(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/BodyLook")
  }

  const handelbackbtn = () => {
    navigate("/FussyEater")
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
          <div id='progressbar' class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuemin="25" aria-valuemax="100" style={{ width: "650px" }} aria-valuenow="25" ></div>
        </div>

        {/* 2rd Row */}
        <div className='row mb-3'>
          <div className='col' id='headingbg'>
            <h1 id='headingcolor' className='py-4' >What is the most important thing about {props.name} <br /> Watkins' food?</h1>
          </div>
        </div>

        {/* Center Part */}

        <div className='row w-100' >
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <div class="radio">
              <form>
                <label>
                  <input type="radio" name="radio" />
                  <span>The ease of ordering and receiving it (just when I need it).</span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>The  food meets her special health needs.</span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>The food contains the best ingredients for Fuller Boyd.</span>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <span>Fuller Boyd loves the taste of the food and is happy to eat it.</span>
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
              Our food has helped dogs with skin and coat issues, joint problems and sensitive stomachs. In fact, we've helped over 40,000 dogs with these conditions.
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
