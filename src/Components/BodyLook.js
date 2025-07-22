import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function BodyLook(props) {
  let navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState();
  const [text, setText] = useState("");

  const styles = {
    border: '2px solid #5D92B8',
    color: '#174F78'
  };

  const wrtiien = {
    a: "A little skinny Narrow waistline and you can clearly see her ribs.",
    b: "Just right Visible waistline with some fat cover but her ribs are easy to feel.",
    c: "A bit chubby Waistline is not visible and her ribs are tricky to feel."
  }

  const handleclickbtn = () => {
    navigate("/Weight")
  }

  const handelbackbtn = () => {
    navigate("/ImportantThing")
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
        <div class="progress  mt-3">
          <div id='progressbar' class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuemin="25" aria-valuemax="100" style={{ width: "750px" }} aria-valuenow="25" ></div>
        </div>

        {/* 2rd Row */}
        <div className='row mb-3'>
          <div className='col' id='headingbg'>
            <h1 id='headingcolor' className='py-2' >What does {props.name} body look like?</h1>
            <p id='smallheading' className='text-center pb-5'>So we can send him the right amount of food.</p>
          </div>
        </div>

        {/* Center Part */}

        <div className='row text-center mt-3' >
          <span className='mt-3 pt-3 pb-4' id='inputheading1'>-------------------------  Fuller Boyd is...  -------------------------</span>
        </div>

        <div className='row' >
          <div className='col-3' ></div>
          <div className='col-2'>
            <div>
              <img src="../Puppy 1.svg" onClick={() => handel1stpic(1)} className="img-fluid" style={selectedImage == 1 ? styles : {}} alt="Image Not Found" />
            </div>
          </div>
          <div className='col-2' >
            <img src="../Puppy 2.svg" onClick={() => handel1stpic(2)} className="img-fluid" alt="Image Not Found" style={selectedImage == 2 ? styles : {}} />
          </div>
          <div className='col-2' >
            <img src="../Puppy 3.svg" onClick={() => handel1stpic(3)} className="img-fluid" alt="Image Not Found" style={selectedImage == 3 ? styles : {}} />
          </div>
        </div>

        <div className='row' >
          <div className='col-3' ></div>
          <div id='threetext' className='col-6 text-center m-4 p-5' >
            {text == 1 ? wrtiien.a : ""}
            {text == 2 ? wrtiien.b : ""}
            {text == 3 ? wrtiien.c : ""}
          </div>

        </div>

        {/* 4th Row */}
        <div className='row' id='FreshFact' >
          <div className='col-2' ></div>
          <div className='col-7 pt-3 pb-3' id='colorfreshfact'>
            <h2>Fresh Fact</h2>
            <p>
              60% of dogs in Ireland are overweight, which is something we'd really like to change. That's why all our meals are perfectly portioned, to suit each dog's needs.
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
