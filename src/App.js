import React, { useState } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogName from './Components/DogName'
import HowActive from './Components/HowActive';
import ImportantThing from './Components/ImportantThing';
import ParentDetails from './Components/ParentDetails';
import HealthIssues from './Components/HealthIssues';
import Gender from './Components/Gender';
import FussyEater from './Components/FussyEater';
import FoodAllergies from './Components/FoodAllergies';
import Weight from './Components/Weight';
import BodyLook from './Components/BodyLook';
import Breed from './Components/Breed';
import AnyTreats from './Components/AnyTreats';
import CurrentlyEating from './Components/CurrentlyEating';
import Age from './Components/Age';


export default function App() {
  const [name, setName] = useState();
  const snddata = (data) => {
    // console.log(data);
    setName(data);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DogName snddata={snddata} />} />
          <Route path="/Gender" element={<Gender name={name} />} />
          <Route path="/Age" element={<Age name={name} />} />
          <Route path="/Breed" element={<Breed name={name} />} />
          <Route path="/CurrentlyEating" element={<CurrentlyEating name={name} />} />
          <Route path="/FussyEater" element={<FussyEater name={name} />} />
          <Route path="/ImportantThing" element={<ImportantThing name={name} />} />
          <Route path="/BodyLook" element={<BodyLook name={name} />} />
          <Route path="/Weight" element={<Weight name={name} />} />
          <Route path="/HowActive" element={<HowActive name={name} />} />
          <Route path="/FoodAllergies" element={<FoodAllergies name={name} />} />
          <Route path="/HealthIssues" element={<HealthIssues name={name} />} />
          <Route path="/AnyTreats" element={<AnyTreats name={name} />} />
          <Route path="/ParentDetails" element={<ParentDetails name={name} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
