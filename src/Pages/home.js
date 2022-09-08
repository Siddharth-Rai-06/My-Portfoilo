import React from "react";
import MyPic from "../Images/sid image for new portfolio.png";
import "../Styles/home.css"

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="intro-text">
                <div className="intro-head-1">
                    <p>Hey There,</p>
                    <p>I'm Siddharth</p>
                </div>
                <div className="intro-head-2">
                <p>Web Developer</p>
                </div>
                </div>
                <picture>
                <div className="intro-img" >
                <img width={400} height={450} src={MyPic} alt="me" />
                </div>
                </picture>
            </div>
        </>
    )
}
export default Home;
