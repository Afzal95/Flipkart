import React from "react";
import {Link} from "react-router-dom";
import data from "./headersPic.json";
console.log(data);

function FirstHeaderDiv(){

    return <div style={{display:"flex",borderBottom:"1px solid grey",marginTop:0}}>
            {data.map((e,id)=>{
                return  <Link key={id} to="/" style={{width:"120px",height:"100px",padding:"15px",marginBottom:"10px", textDecoration:"none"}}>
                        <div style={{width:"100px"}}>
                            <img width="90%" height="90px" src={e.src} alt="pic" />
                            <h4 style={{marginTop:0,marginLeft:"10px"}}>{e.desc}</h4>
                        </div>
                        </Link>
            })}
        </div>
}

export {FirstHeaderDiv};