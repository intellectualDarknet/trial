import React, { useState } from "react";
import Card from "../card/card";
import "./numbers.scss";

function Numbers() {
  return (
    <>
      <img src="../../../public/assets/1.jpg" alt="" />
      <div className="numbers">
        <div className="numbers__wra pper">
          <div className="numbers__grid">
            {new Array(100).fill('1').map((_, index) => <Card key={index} index={index} url={'./assets/' + index + '.jpg'}/>)}
          </div>
        </div>
      </div>
    </>
  );
}
export default Numbers; 