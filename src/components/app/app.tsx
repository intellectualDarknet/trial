import React, { useState } from "react";
import "./app.scss";
import Card from "../card/card";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Header from "../header/header";
import Numbers from "../numbers/numbers";
import Eyetrain from "../eyetrain/eyetrain";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="numbers" element={<Numbers />} />
            <Route path="*" element={<Navigate to="eyetrain" />} />
            <Route path="eyetrain" element={<Eyetrain />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
