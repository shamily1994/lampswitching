import React from "react";


const Light =({color,lit,setLit})=>{
   
    return(
        <div>
            <div className="light" style={{backgroundColor:color===lit? color:"grey" }}>

             <button className="btn1" onClick={()=>setLit(color)}>click</button>
             
            </div>
        </div>
    )
};
export default Light;