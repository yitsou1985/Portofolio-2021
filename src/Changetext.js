import React,{useState} from "react";
import "./Changetext.css";


function Changetext(){
    const[text,setText]=useState("")

    return(
        <div className="COLOR">
        <h3>Click Button Hello</h3>
        <h3 className="coo" >{text}</h3>
        <button onClick={()=>setText("Hooks say Hello")}className="">Hello</button><br/><br/>
        <button onClick={()=>setText("Every")}className="Color">Every</button><br/><br/>
        <button onClick={()=>setText("Body")}className="Coloor">Body</button><br/><br/>
        <button onClick={()=>setText("")}className="Coloor">By</button><br/><br/>
        
        </div>
    )
}

export default Changetext; 