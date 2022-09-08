import React from "react";
import MyPic from "../Images/sid image for new portfolio.jpg";
import "../Styles/newhome.css";

const Newhome=()=>{
    return(
        <>
        <div className="home-container">
        <div className="cont-1">
        <div className="heading">
            <h1>Hey There,</h1>
        </div>
        <div className="heading">
            <h1>I'm Siddharth</h1>
            <br/>

        </div>
        <div className="heading">
            <p>I am a Practicing Web Developer</p>
            <p>And I love designing and building websites</p>
        </div>
        </div>
        <div className="myimg">
        <img 
        //  style={{width:300, height:350}} 
         src={MyPic} alt='me'></img>
        {/* <p>Hello this is first line and i am going to just type loerm ipsum Hello this is first line and i am going to just type loerm ipsum Hello this is first line and i am going to just type loerm ipsum Hello this is first line and i am going to just type loerm ipsum Hello this is first line and i am going to just type loerm ipsum Hello this is first line and i am going to just type loerm ipsum</p> */}
        </div>
        </div>
        </>
    )
}

export default Newhome;