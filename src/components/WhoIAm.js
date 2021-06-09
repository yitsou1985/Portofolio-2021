import React,{Component} from "react";
import Image from "../components/image/photo_profil.jpeg";
import CV from "../CV.js";
import CVPhoto from "../CVPhoto"

function WhoIAM(){
    return (
      <div>
        <h1>Who I am</h1>
        <img src={Image} height="200" />
        <h4>I'm someone who is serious curious and passionned</h4>
        <h4>And looking for a new opportunity Full Stack</h4>
        <CV />
        <CVPhoto />

        {
          //<h5>CV <a href="../components/image/Yitshak-Bornstein-CV.pdf" download>Click to download</a></h5>
        }
      </div>
    );
}

export default WhoIAM;