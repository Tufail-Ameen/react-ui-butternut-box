import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Gender(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/Age")
  }

  const handelbackbtn = () => {
    navigate("/")
  }

  return (
    <>

      <div className='container-fluid' >
        {/* 1st Row */}
        <div className='row' >
          <div className='col-2'>
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
          <div id='progressbar' class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuemin="25" aria-valuemax="100" style={{ width: "150px" }} aria-valuenow="25" ></div>
        </div>

        {/* 2rd Row */}
        <div className='row mb-3'>
          <div className='col' id='headingbg'>
            <h1 id='headingcolor' className='py-4' >Is {props.name} a boy or girl?</h1>
          </div>
        </div>

        {/* Center Part */}
        <div className='row text-center mt-3' >
          <span className='mt-3 pt-3' id='inputheading1'>-------------------------  Kylan Watkins is a good...  -------------------------</span>
        </div>

        <div class="container mt-3">
          <div class="button-wrap">
            <input class="hidden radio-label" id="girl-button" type="radio" name="gender" checked />
            <label class="button-label" for="girl-button">
              <h1>Girl</h1>
            </label>
            <input class="hidden radio-label" id="boy-button" type="radio" name="gender" />
            <label class="button-label" for="boy-button">
              <h1>Boy</h1>
            </label>
          </div>
        </div>

        <div className='row' >
          <div className='col-5' ></div>
          <div className='col-2 mt-3 mb-3' >
            <span id='inputheading2'>and is he neutered?</span>
          </div>
        </div>

        <div class="container">
          <div class="button-wrap">
            <input class="hidden radio-label" id="yes-button" type="radio" name="neutered" />
            <label class="button-label" for="yes-button">
              <h1>Yes</h1>
            </label>
            <input class="hidden radio-label" id="no-button" type="radio" name="neutered" checked />
            <label class="button-label" for="no-button">
              <h1>No</h1>
            </label>
          </div>
        </div>

        {/* 4th Row */}
        <div className='row' id='FreshFact' >
          <div className='col-2' ></div>
          <div className='col-7 pt-3 pb-3' id='colorfreshfact'>
            <h2>Fresh Fact</h2>
            <p>
              Did you know most people in Ireland don't know what's in their dog food? We make it very clear - only the best human-quality meat, veg, vitamins and minerals your dog needs.
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


        {/* Container End */}
      </div>
    </>
  )
}
