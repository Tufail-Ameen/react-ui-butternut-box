import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function ParentDetails(props) {
  let navigate = useNavigate();

  const handelbackbtn = () => {
    navigate("/AnyTreats")
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
          <div id='progressbar' class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuemin="25" aria-valuemax="100" style={{ width: "1250px" }} aria-valuenow="25" ></div>
        </div>

        {/* 2nd Row */}
        <div className='row mb-3'>
          <div className='col' id='headingbg'>
            <h1 id='headingcolor' className='' >Pup parent details</h1>
            <p id='headingcolor' className=' pb-5'>Don't worry - we won't create an account until you've reviewed and paid for your plan on the next <br /> pages.</p>
          </div>
        </div>

        {/* 2 Inputs Name n Email */}
        <div className='row' >
          <div className='col-3' ></div>
          <div className='col-6 mt-4' >

            <div class="mb-3">
              <label for="exampleFormControlInput1" id='labelparent' class="form-label">Your name</label>
              <input type="text" class="form-control p-3" id="exampleFormControlInput1" placeholder="e.g.Elle Woods" />
            </div>

            <label for="exampleFormControlInput1" id='labelparent' class="form-label">Your email</label>
            <input type="email" class="form-control p-3" id="exampleFormControlInput1" placeholder="e.g.bruisersmum@woofmail.com" />
          </div>
        </div>




        {/* 4th Row */}
        <div className='row' id='FreshFact' >
          <div className='col-2' ></div>
          <div className='col-7 pt-3 pb-3' id='colorfreshfact'>
            <h2>Fresh Fact</h2>
            <p>
              We're changing the history of dog food, but we still love seeing our Butternutters with names like Jane Pawsten, George Washingbone and Joan of Bark (to name a few).
            </p>
          </div>
          <div className='col3' ></div>
        </div>

        {/* 5th Row */}
        <div className='row' id='footer' >
          <div className='col-4'></div>
          <div className='col-4'>
            <a href="#" onClick={handelbackbtn} class="previous mt-3 mb-3">&laquo; Back</a>
            <a href="#" class="next mt-3 mb2">Continue &raquo;</a>
          </div>
        </div>
      </div>
    </>
  )
}
