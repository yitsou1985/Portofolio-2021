import React,{Component} from "react";
import Counter from "../counter";
import Video from "../video";
import BouncingBall from "../BounceBal";
import Image from "../components/image/Edit_Delete.png";

const MySkill = () => {
  return (
    <div>
      <h1>My Skill in React</h1>
      <Counter />
      <br></br>
      <center>
        <a href="https://yitsou1985.github.io/edit_and_delete_todolist">
          <i className="arrow right"></i>Vieuw Edit and delete todolist{'  '}
          <i className="arrow left"></i>
        </a> <img src={Image} height="80" />
        <br />

        <p></p>
        <BouncingBall />
        <br />
      </center>
      <Video />
    </div>
  );
};
export default MySkill;