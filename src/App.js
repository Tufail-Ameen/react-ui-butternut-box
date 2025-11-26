import React, { useState } from "react";
import "./App.css";
import Layout from "./Pages/Layout";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Store/store";
import { Provider } from "react-redux";

export default function App() {
  const [name, setName] = useState();
  const snddata = (data) => {
    console.log(data);
    setName(data);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout snddata={snddata} />
      </BrowserRouter>
    </Provider>

  );
}
