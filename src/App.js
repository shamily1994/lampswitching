
import React, { useState } from 'react';
import "./App.css";
import Light from "./Light";
import Dark from './Dark';

const App = () => {
  const colors = ["yellow"];
  const dcolors = ["yellow"]
  const [lit, setLit] = useState("grey");
  const [dlit, setDlit] = useState("grey");
  return (
    <div className='App'>

      {colors.map((color) => {
        return (
          <div>

            <Light color={color} lit={lit} setLit={setLit} setDLit={setDlit}/>
            {/* <Dark color={color} lit={lit} setLit={setLit}/>
           */}


          </div>
        )
      })}

      {dcolors.map((color) => {
        return (
          <div>


            <Dark color={color} dlit={dlit} setDLit={ setDlit} />



          </div>
        )
      })}




    </div>

  )
}


export default App;
