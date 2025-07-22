import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function HowActive(props) {
  let navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState();
  const [text, setText] = useState("");

  const styles = {
    border: '2px solid #5D92B8',
    color: '#174F78'
  };

  const wrtiien = {
    a: "A serial snoozer Under 30min walks per day",
    b: "Somewhat active 0.5 - 1hr walks per day",
    c: "Active 1-2hr walks per day",
    d: "Very active 2-3hr walks per day",
    e: "Full of energy More than 3hr walks per day"
  }

  const handleclickbtn = () => {
    navigate("/FoodAllergies")
  }

  const handelbackbtn = () => {
    navigate("/Weight")
  }

  const handel1stpic = (a) => {
    setSelectedImage(a)
    setText(a)
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
          <div id='progressbar' class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuemin="25" aria-valuemax="100" style={{ width: "950px" }} aria-valuenow="25" ></div>
        </div>

        {/* 2nd Row */}
        <div className='row mb-3'>
          <div className='col' id='headingbg'>
            <h1 id='headingcolor' className='pt-4' >How active is {props.name}?</h1>
            <p id='smallheading' className='text-center pb-5'>Whether they're a bundle of energy or a serial snoozer, every dog is unique and needs a different <br /> amount of food.</p>
          </div>
        </div>

        {/* Center Part */}
        <div className='row text-center mt-3' >
          <span className='mt-3 pt-3 pb-4' id='inputheading1'>-------------------------  Fuller Boyd is...  -------------------------</span>
        </div>

        <div className='row' >
          <div className='col-5'></div>
          <div className='col-3 px-4'>
            <div class="form-check ">
              <input class="form-check-input mx-2 " type="checkbox" value="" id="flexCheckDefault" />
              <span class="form-check-label spanworking" for="flexCheckDefault">
                A working dog
              </span>
            </div>
          </div>
        </div>


        <div className='row mt-3' >
          <div className='col-1' ></div>
          <div className='col-2' >
            <img src="../1.1.svg" onClick={() => handel1stpic(1)} className="img-fluid" style={selectedImage == 1 ? styles : {}} alt="Image Not Found" />
          </div>

          <div className='col-2' >
            <img src="../1.2.svg" onClick={() => handel1stpic(2)} className="img-fluid" alt="Image Not Found" style={selectedImage == 2 ? styles : {}} />
          </div>

          <div className='col-2' >
            <img src="../1.3.svg" onClick={() => handel1stpic(3)} className="img-fluid" alt="Image Not Found" style={selectedImage == 3 ? styles : {}} />
          </div>

          <div className='col-2' >
            <img src="../1.4.svg" onClick={() => handel1stpic(4)} className="img-fluid" alt="Image Not Found" style={selectedImage == 4 ? styles : {}} />
          </div>

          <div className='col-2' >
            <img src="../1.5.svg" onClick={() => handel1stpic(5)} className="img-fluid" alt="Image Not Found" style={selectedImage == 5 ? styles : {}} />
          </div>
        </div>

        {/* Print text using state */}
        <div className='row' >
          <div className='col-1' ></div>
          <div id='threetext' className='col-10 text-center m-4 p-5' >
            {text == 1 ? wrtiien.a : ""}
            {text == 2 ? wrtiien.b : ""}
            {text == 3 ? wrtiien.c : ""}
            {text == 4 ? wrtiien.d : ""}
            {text == 5 ? wrtiien.e : ""}
          </div>
        </div>

        {/* 4th Row */}
        <div className='row' id='FreshFact' >
          <div className='col-2' ></div>
          <div className='col-7 pt-3 pb-3' id='colorfreshfact'>
            <h2>Fresh Fact</h2>
            <p>
              In the 2000s, some dog foods featured an ingredient known as 'meat slurry'. We don't want to know exactly what that is, but we can guarantee you won't find it in our food.
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
