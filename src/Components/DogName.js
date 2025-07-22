import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function DogName(props) {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [dogNames, setDogNames] = useState([]);
    const [showFocus, setShowFocus] = useState("");   //On Focus state

    const handelbackbtn = () => {
        navigate("/");
    }

    const handelchangeevent = (e) => {
        setName(e.target.value);
    }

    const handleChangeEvent = (e, index) => {
        const updatedNames = [...dogNames];
        updatedNames[index] = e.target.value;
        setDogNames(updatedNames);
    }

    const handleclickbtn = (e) => {
        navigate("/Gender");
        e.preventDefault();
        props.snddata(name);
    }

    const handleAnotherDogClick = (e) => {
        e.preventDefault();
        setDogNames([...dogNames, '']);
    }

    const handleClearInput = (index) => {
        const updatedNames = [...dogNames];
        updatedNames[index] = '';
        setDogNames(updatedNames);
    }

    return (
        <>
            {/* Container */}
            <div className='container-fluid'>
                {/* 1st Row */}
                <div className='row'>
                    <div className='col-2'>
                        <div className='mx-2 text-start pt-3' id='navheadind'>
                            Butternut <br /> Box
                        </div>
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
                <div class="progress mt-3" >
                    <div id='progressbar' class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuemin="25" aria-valuemax="100" style={{ width: "50px" }} aria-valuenow="25" ></div>
                </div>

                {/* 2nd Row */}
                <div className='row mb-3'>
                    <div className='col border' id='headingbg'>
                        <h1 id='headingcolor' className='pt-5'>First, what's your dog's name?</h1>
                    </div>
                </div>

                {/* Input 1st box */}
                <div className="row">
                    <div className="col-3"></div>   
                    <div className="col-6 my-4 py-3">
                        <div className='row'>
                            <div className='col-1'></div>
                            <div className='col-9 p-3 mb-2' id='shadowset'>
                                <FontAwesomeIcon icon={faXmark} />
                                <label htmlFor="exampleFormControlInput1" className="form-label" id='labelclr1'>
                                    My dog is called...
                                </label>
                                <input
                                    onChange={handelchangeevent}
                                    value={name}
                                    className="form-control form-control-lg border"
                                    type="text"
                                    placeholder="Your dog's name"
                                    aria-label=".form-control-lg example"
                                    name='day'
                                    onFocus={() => setShowFocus("day")}
                                    onBlur={() => setShowFocus("")}
                                    style={{
                                        boxShadow: showFocus === "day" ? '0px 0px 0px 2px rgb(23, 79, 120)' : '0px 0px 0px 1px #5D92B8'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Another boxes */}
            {dogNames.map((dogName, index) => (
                <div className="row mx-2" key={index}>
                    <div className="col-3"></div>
                    <div className="col-6 my-4 py-3">
                        <div className='row'>
                            <div className='col-1'></div>
                            <div className='col-9 p-3 mb-2' id='shadowset' >
                                <label htmlFor={`exampleFormControlInput${index}`} className="form-label" id='labelclr1'>
                                    My dog is called...
                                </label>
                                <input
                                    onChange={(e) => handleChangeEvent(e, index)}
                                    value={dogName}
                                    id={`boxshadowhandel${index}`}
                                    className="form-control form-control-lg border"
                                    type="text"
                                    placeholder="Your dog's name"
                                    aria-label=".form-control-lg example"
                                    name='day1'
                                    onFocus={() => setShowFocus("day1")}
                                    onBlur={() => setShowFocus("")}
                                    style={{
                                        boxShadow: showFocus === "day1" ? '0px 0px 0px 2px rgb(23, 79, 120)' : '0px 0px 0px 1px #5D92B8'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* "I have another dog" button */}
            <div className='row mx-2'>
                <div className="col-3"></div>
                <div className="col-6">
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className='col-9 text-end' id='atag'>
                            <a id='labelclr' className='mx-2' onClick={handleAnotherDogClick} href="">
                                I have another dog
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fresh Fact */}
            <div className='row mx-2' id='FreshFact'>
                <div className='col-2'></div>
                <div className='col-7 pt-3 pb-3' id='colorfreshfact'>
                    <h2>Fresh Fact</h2>
                    <p>
                        The story of Butternut Box begins with a farting Staffie called Rudie. Only home-cooked meals could help her terrible farts, and the rest, as they say, is history.
                    </p>
                </div>
                <div className='col3'></div>
            </div>

            {/* Footer btn */}
            <div className='row' id='footer'>
                <div className='col-5'></div>
                <div className='col-2'>
                    <button onClick={handleclickbtn} disabled={name !== "" ? false : true} type="button" className="btn btn-sm py-1 px-1 m-3" id='btnfont'>
                        LET'S START
                    </button>
                </div>
            </div>

            {/* Container End */}
        </>
    );
}
