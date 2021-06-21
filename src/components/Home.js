import React,{Component} from "react";
import "./home.css";
import BouncingBall from "../BounceBal";
/*don't forget to npm i framer-motion*/


const Home = ()=>{
    return(
        <div>
            <h1>Home</h1>
            <h4>I'm a React js Web Developer </h4>
            <h4>and looking for a new challenge Full Stack</h4>
            <center>
            <ul>
            <li >Html <i className="arrow left"></i></li> 
            <li>Css <i className="arrow left"></i></li>
            <li>JavaScript <i className="arrow left"></i></li>
            <li>React <i className="arrow left"></i></li>
            <li>Nodejs <i className="arrow left"></i></li>
            <li>NoSQL  <i className="arrow left"></i></li>
            <li>PostgreSQL <i className="arrow left"></i></li>
            <li>Github <i className="arrow left"></i></li><br></br>

            <BouncingBall />
            
            </ul>
            </center>
        </div>
    )
}
export default Home;