import React, { useState } from "react";
import "./eyecard.scss"

export interface IEyecard {
  value?: number;
  url?: string;
  Click: any;
}

function Eyecard({value, url, Click}: IEyecard) {

  return (
    <>
      <div onClick={() => Click(value)} className="eyecard">
          {value && <div className="eyecard__text">{value}</div>}
          {url && <img className="eyecard__img"src={url} alt="" />}
      </div>
    </>
  )
}

export default Eyecard;