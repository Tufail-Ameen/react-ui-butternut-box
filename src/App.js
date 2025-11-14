import React, { useState } from "react";
import "./App.css";
import Layout from "./Pages/Layout";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const [name, setName] = useState();
  const snddata = (data) => {
    console.log(data);
    setName(data);
  };

  return (
    <BrowserRouter>
      <Layout snddata={snddata} />
    </BrowserRouter>
  );
}
