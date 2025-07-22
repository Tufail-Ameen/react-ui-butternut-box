import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Age(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/Breed")
  }

  const handelbackbtn = () => {
    navigate("/Gender")
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
          <div id='progressbar' class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuemin="25" aria-valuemax="100" style={{ width: "250px" }} aria-valuenow="25" ></div>
        </div>

        {/* 2rd Row */}
        <div className='row mb-3'>
          <div className='col' id='headingbg'>
            <h1 id='headingcolor' className='py-4' >How old is {props.name}?</h1>
          </div>
        </div>

        {/* Center Part */}
        <div className='row text-center mt-3' >
          <span className='mt-3 pt-3' id='inputheading1'>-------------------------  Kylan Watkins is...  -------------------------</span>
        </div>

        <div class="radiobtn mt-3">
          <div class="button-wrap">
            <input class="hidden radio-label" type="radio" name="puppy" id="yes-button" />
            <label class="button-label" for="yes-button">
              <h1>A Puppy</h1>
            </label>
            <input class="hidden radio-label" type="radio" name="puppy" id="no-button" />
            <label class="button-label" for="no-button">
              <h1>An adult</h1>
            </label>
            <input class="hidden radio-label" type="radio" name="puppy" id="maybe-button" checked />
            <label class="button-label" for="maybe-button">
              <h1>A senior</h1>
            </label>
          </div>
        </div>

        <div className='row mt-4 mb-5' >
          <div className='col-5' ></div>
          <div className='col-6' >

            <input className="form-control centerInputs" id="ex1-years" type="number" placeholder='0' />
            <label className='inputslabels mx-2' htmlFor="ex1-years">years</label>

            <input className="form-control centerInputs " id="ex1-months" type="number" placeholder='0' />
            <label className='inputslabels mx-2' htmlFor="ex1-months">months</label>

          </div>
        </div>

        {/* 4th Row */}
        <div className='row mt-4' id='FreshFact' >
          <div className='col-2' ></div>
          <div className='col-7 pt-3 pb-3' id='colorfreshfact'>
            <h2>Fresh Fact</h2>
            <p>
              Senior dogs make up about 25,000 of our Butternutters. Maybe you can't teach an old dog new tricks, but it's never too late to try a new dish (and we've got plenty).
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

        {/* Container End  */}
      </div >

    </>
  )
}
