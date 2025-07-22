import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Weight(props) {
    let navigate = useNavigate();
    const [weight, setWeight] = useState(0);

    const handleSliderChange = (event) => {
        const newWeight = event.target.value;
        setWeight(newWeight);
    }

    const handleclickbtn = () => {
        navigate("/HowActive")
    }

    const handelbackbtn = () => {
        navigate("/BodyLook")
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
                    <div id='progressbar' class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuemin="25" aria-valuemax="100" style={{ width: "850px" }} aria-valuenow="25" ></div>
                </div>

                {/* 2rd Row */}
                <div className='row mb-3'>
                    <div className='col' id='headingbg'>
                        <h1 id='headingcolor' className='py-4' >How much does {props.name} weigh?</h1>
                    </div>
                </div>

                {/* Center Part */}
                <div className='row text-center mt-3' >
                    <span className='mt-3 pt-3 pb-4' id='inputheading1'>-------------------------  Fuller Boyd weighs about...  -------------------------</span>
                </div>

                <div className='row' >
                    <div className='col-4' ></div>
                    <div className='col-4' >

                        <div className='row'>
                            <div className='col-4'></div>
                            <div className='col-4'>
                                <input className="form-control centerInputs mx-2" id='ex1-years' type="number" value={weight} onChange={handleSliderChange} placeholder='0' />
                                <label className='inputslabels' htmlFor="ex1-years">Kg</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row pt-5' >
                    <div className='col-3'></div>
                    <div className='col-1' >
                        <img src="../1.svg" className="img-fluid" alt="Image Not Found" />
                    </div>
                    <div className='col-1' >
                        <img src="../2.svg" className="img-fluid" alt="Image Not Found" />
                    </div>
                    <div className='col-1' >
                        <img src="../3.svg" className="img-fluid" alt="Image Not Found" />
                    </div>
                    <div className='col-1' >
                        <img src="../4.svg" className="img-fluid" alt="Image Not Found" />
                    </div>
                    <div className='col-1' >
                        <img src="../5.svg" className="img-fluid" alt="Image Not Found" />
                    </div>
                    <div className='col-1' >
                        <img src="../6.svg" className="img-fluid" alt="Image Not Found" />
                    </div>
                    <div className='col-1' >
                        <img src="../7.svg" className="img-fluid" alt="Image Not Found" />
                    </div>
                </div>

                <div className='row' >
                    <div className='col-3' ></div>
                    <div className='col-7' >
                        {/* <label for="customRange2" class="form-label">range</label> */}
                        <input type="range" class="form-range mt-3" min="0" max="50" id="customRange2" onChange={handleSliderChange} value={weight} />
                    </div>
                </div>

                <div className='row' >
                    <div className='col-4' ></div>
                    <div className='col-5 pt-4 pb-3' >
                        <p id='clr' >Use the slider above to give us her approximate weight.</p>
                    </div>
                </div>



                {/* 4th Row */}
                <div className='row' id='FreshFact' >
                    <div className='col-2' ></div>
                    <div className='col-7 pt-3 pb-3' id='colorfreshfact'>
                        <h2>Fresh Fact</h2>
                        <p>
                            Did you know? We taste-test every one of our fresh recipes ourselves, so we can be sure that they're good enough for our Butternutters. Pass us a spoon.
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
