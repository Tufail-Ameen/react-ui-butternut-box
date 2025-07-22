import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function HealthIssues(props) {
  let navigate = useNavigate();
  const [clr, setClr] = useState();

  const styles = {
    color: 'white',
    backgroundColor: '#11486E'
  };

  const handleclickbtn = () => {
    navigate("/AnyTreats")
  }

  const handelbackbtn = () => {
    navigate("/FoodAllergies")
  }

  const handlbtn = (a) => {
    setClr(a)
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
          <div id='progressbar' class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuemin="25" aria-valuemax="100" style={{ width: "1100px" }} aria-valuenow="25" ></div>
        </div>

        {/* 2nd Row */}
        <div className='row mb-3'>
          <div className='col' id='headingbg'>
            <h1 id='headingcolor' className='' >Does {props.name} have any health issues?</h1>
            <p id='smallheading' className='text-center pb-5'>While our meals are perfect for a range of conditions, there are some we can’t yet cater for.</p>
          </div>
        </div>

        {/* Center Part */}
        <div className='row text-center mt-3' >
          <span className='mt-3 pt-3 pb-4' id='inputheading1'>-------------------------  Fuller Boyd has...  -------------------------</span>
        </div>

        {/* 2 Buttons */}
        <div className='row' >
          <div className='col-4' ></div>
          <div className='col-4' >
            <button type="button" onClick={() => handlbtn(1)} style={clr == 1 ? styles : {}} class="btn mx-2 py-3 btnclr">No health issues
            </button>
            <button type="button" onClick={() => handlbtn(2)} style={clr == 2 ? styles : {}} class="btn py-3 btnclr">Some health issues
            </button>
          </div>
        </div>

        {/* Input Box */}
        <div className='row' >
          <div className='col-4' ></div>
          <div className='col-4 mt-4 ml-5' >
            <div class="mb-3">
              <input type="text" class="form-control py-3" id="exampleInputEmail1" placeholder="Fuller Body's health issue" aria-describedby="emailHelp" />
            </div>
          </div>
        </div>

        {/* 4th Row */}
        <div className='row' id='FreshFact' >
          <div className='col-2' ></div>
          <div className='col-7 pt-3 pb-3' id='colorfreshfact'>
            <h2>Fresh Fact</h2>
            <p>
              76% of our customers have seen improvements in their dog's health since feeding fresh - from shinier coats to better poos. (We're not shy of a little poo chat here).
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
