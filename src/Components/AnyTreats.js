import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function AnyTreats(props) {
  let navigate = useNavigate();
  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const wrtiien = {
    a: "Doesn't eat any",
    b: "Has some 1-3 times a day",
    c: "Has lots 4+ times a day",
  }

  const styles = {
    border: '2px solid #5D92B8',
    color: '#174F78'
  };

  const handleclickbtn = () => {
    navigate("/ParentDetails")
  }

  const handelbackbtn = () => {
    navigate("/HealthIssues")
  }

  const handelclick = (e) => {
    setSelectedImage(e)
    setText(e)
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
          <div id='progressbar' class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuemin="25" aria-valuemax="100" style={{ width: "1200px" }} aria-valuenow="25" ></div>
        </div>

        {/* 2nd Row */}
        <div className='row mb-3'>
          <div className='col' id='headingbg'>
            <h1 id='headingcolor' className='pt-4 pb-5'>Does {props.name} get any treats or snacks?</h1>
          </div>
        </div>

        {/* Center Part */}
        <div className='row text-center mt-3' >
          <span className='mt-3 pt-3' id='inputheading1'>-------------------------  Fuller Boyd...  -------------------------</span>
        </div>

        {/* 3 Images Attach */}
        <div className='row' >
          <div className='col-3' ></div>
          <div className='col-2' >
            <img src="../2.1.svg" className="img-fluid" onClick={() => handelclick(1)} style={selectedImage == 1 ? styles : {}} alt="Image Not Found" />
          </div>
          <div className='col-2 pt-4' >
            <img src="../2.2.svg" className="img-fluid" onClick={() => handelclick(2)} style={selectedImage == 2 ? styles : {}} alt="Image Not Found" />
          </div>
          <div className='col-2 pt-4' >
            <img src="../2.3.svg" className="img-fluid" onClick={() => handelclick(3)} style={selectedImage == 3 ? styles : {}} alt="Image Not Found" />
          </div>
        </div>

        {/* Print text using state */}
        <div className='row' >
          <div className='col-3' ></div>
          <div id='threetext' className='col-6 text-center m-4 p-5' >
            {text == 1 ? wrtiien.a : ""}
            {text == 2 ? wrtiien.b : ""}
            {text == 3 ? wrtiien.c : ""}
          </div>
        </div>

        {/* 4th Row */}
        <div className='row mt-5' id='FreshFact' >
          <div className='col-2' ></div>
          <div className='col-7 pt-3 pb-3' id='colorfreshfact'>
            <h2>Fresh Fact</h2>
            <p>
              We're mutts about dog nutrition, that's why we've launched our own treats, toppers, biscuits, chews and broths to keep your dog's tum happy.
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
