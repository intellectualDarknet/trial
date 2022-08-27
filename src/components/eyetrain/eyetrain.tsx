import React from "react";
import Eyecard from "../eyecard/eyecard";
import "./eyetrain.scss"

function Eyetrain() {
  let array: any[] = [];
  let array2:any[] = [];

  let [size, setSize] = React.useState(5);
  let [counter, setCounter] = React.useState(1);
  let [flag, setFlagSize] = React.useState(false);

  async function randomize() {
    
    let k = new Set();
    while (k.size != size ** 2 - 1) {
      k.add(Math.round(Math.random() * ((size * size) - 1) ) + 1)
    }
    array = Array.from(k);
    array2 = array.slice(array.length / 2)
    array = array.slice(0, array.length / 2)
    console.log(array);
    console.log(array2);
  }
  randomize();

  function Click(value: number) {
    if (value === counter) {
      setCounter(++counter);
    }
  }

  return (
    <>
      <div className="eyetrain">
        <div className="eyetrain__wrapper">
          <div style={{'display': 'grid', "gridTemplateColumns": `repeat(${size}, 120px)`, "gap": "2px"}} className="eyetrain__grid">
            {array.map((a: number) => <Eyecard Click={Click} value={a}/>)}
            <Eyecard Click ={Click} url={"./assets/eye.png"}/>
            {array2.map((a: number) => <Eyecard  Click={Click} value={a}/>)}
          </div>
        </div>
      </div>
      <input className="size" type="text" placeholder="size" />
      <button>1-100 train</button>
    </>
  )
}

export default Eyetrain;