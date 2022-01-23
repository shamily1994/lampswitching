import React from "react";


const Dark =({color,dlit,setDLit,setLit})=>{
    return(
        <div>
            <div className="dark" style={{backgroundColor:color===dlit?color:"grey" }}>

             <button className="btn2" onClick={()=>setDLit(color)}>click</button>
             
            </div>
        </div>
    )
};
export default Dark;