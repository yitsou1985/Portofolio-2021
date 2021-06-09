import React,{Component} from "react";
import ReactPlayer from "react-player";
/*don't forget to npm i react-player*/
import  "./video.css";

    
const Video = ()=>{
        return(
            <div className= "center">
            
           
            {
            //<ReactPlayer  url="https://youtu.be/MuARMr63Yoc" controls={true}/>
            }
            
            <ReactPlayer  url="https:youtu.be/XtnrSUG-QKA controls" controls ={true}/>
            
            
            </div>
        

            
        )
    }
    export default Video;