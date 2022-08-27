import React, { useState } from "react";
import "./card.scss"

export interface Icard {
  url: string;
  index: number
}

function Card({url,index}: Icard) {

  let [flag, setFlag] = useState(true)

  function toggleFunction() {
    setFlag((prev) => !prev)
  }

  return (
    <>
      <div onClick ={toggleFunction}className="card">
          {flag && <img className="card__img" src={url} alt="source"/>}
          {!flag && <div className="card__text">{index}</div>}
      </div>
    </>
  )
}

export default Card;