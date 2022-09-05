import React from "react";
import MyPic from "../Images/sid image for new portfolio.png";
import "../Styles/home.css"

const Home = () => {
    return (
        <>
            <div className="home-wrapper">
                <div className="intro-text">
                <div>
                    <p>Hey There,</p>
                    <p>I'm Siddharth</p>
                </div>
                </div>
                <div className="intro-img" >
                <img src={MyPic} alt="intro-image" />
                </div>
            </div>
        </>
    )
}
export default Home;
