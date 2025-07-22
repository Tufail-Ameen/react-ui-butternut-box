import React from 'react'
import { useNavigate } from "react-router-dom";


export default function Breed(props) {
  let navigate = useNavigate();

  const handleclickbtn = () => {
    navigate("/CurrentlyEating")
  }

  const handelbackbtn = () => {
    navigate("/Age")
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
          <div id='progressbar' class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuemin="25" aria-valuemax="100" style={{ width: "350px" }} aria-valuenow="25" ></div>
        </div>


        {/* 2rd Row */}
        <div className='row mb-3'>
          <div className='col' id='headingbg'>
            <h1 id='headingcolor' className='py-4' >What breed is {props.name}?</h1>
          </div>
        </div>

        {/* Center Part */}

        <div className='row text-center mt-3' >
          <span className='mt-3 pt-3' id='inputheading1'>-------------------------  Kylan Watkins is a good...  -------------------------</span>
        </div>

        <div className='row mt-5 mb-4' >
          <div className='col-4'></div>
          <div className='col-4'>
            <select class="form-select" aria-label="Default select example">
              <option selected>Kylan Watkins' breed </option>
              <option value="1">Border Collie</option>
              <option value="2">Border Terrier</option>
              <option value="3">Cavalier King Charles Spaniel</option>
              <option value="4">Cavapoo - (Cavalier King Charles Spaniel / Poodle mix)</option>
              <option value="5">Chihuahua</option>
              <option value="6">Shih Tzu/Pug/Chihuahua</option>
              <option value="7">Cockapoo - (Cocker Spaniel / Poodle mix)</option>
              <option value="8">Cocker Spaniel</option>
              <option value="9">Cross-bread</option>
              <option value="10">Dachshund</option>
              <option value="11">French Bulldog</option>
            </select>
          </div>
        </div>

        <div className='row text-center mb-5'>
          <div className='col-3' ></div>
          <div className='col-5' >
            <input class="form-check-input mx-2" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label check" for="flexCheckDefault">
              I don't know her breed
            </label>
          </div>
        </div>


        {/* 4th Row */}
        <div className='row' id='FreshFact' >
          <div className='col-2' ></div>
          <div className='col-7 pt-3 pb-3' id='colorfreshfact'>
            <h2>Fresh Fact</h2>
            <p>
              We feed 555 different breeds at Butternut Box, as well as a whole pack of wonderful rescues. Fresh, tasty food is a hit no matter what breed, age, or size.
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
