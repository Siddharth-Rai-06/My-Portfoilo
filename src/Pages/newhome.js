import React from "react";
import MyPic from "../Images/sid image for new portfolio.jpg";
import Stack  from "../Images/stack.gif";
import Music  from "../Images/music.gif";
import "../Styles/newhome.css";
import "../Styles/intro.css";
import * as FaIcons from "react-icons/fa";
import Footer from "../components/footer";

const Newhome=()=>{
    return(
        <>
        <div className="home-container">
        <div className="cont-1">
        <div className="heading">
            <p>Hey There,</p>
            <p>I'm Siddharth</p>
        </div>
        <div className="def">
            <p>I am a Practicing Web Developer</p>
            <p>And I love designing and building <br/> websites</p>
        </div>
        <div className="hobbies">
        <FaIcons.FaCode />
        <FaIcons.FaMusic/>
        <FaIcons.FaGamepad/>
        <FaIcons.FaVolleyballBall/>
        </div>
        </div>
        <div className="myimg">
        <img src={MyPic} alt='me'></img>
        </div>
        </div>
        <hr className="hr" />
        <div className="intro-container">
             <div className="part-1">
             <div className="intro-img-1">
             <img src={ Stack} alt="stack"/>
             </div>
             <div className="intro-text-1">
             <p>Hey guys, I am Siddharth Rai. In my second year of college, I tried my hands on various things like Content Writing, Cloud Solutions,
             Ethical Hacking, but none of them piqued my interest. It was at that time that I started with Web Development. In the beginning it felt like just another
             field I tried perviously, but as soon as I dug deeper my mind and heart fell for it. I started with the basics and slowly made my way ahead into 
             React.</p>
             </div>
             </div>
             <div className="part-2">
             <div className="intro-text-2">
             <p>Apart from coding and developing websites I often listen to music, play online games, or sometimes I spend my time playing volleyball. I also like to watch
             movies and series, but more than that I love watching animes. Recently, I have also developed a habit of listening to podcast and often try to utilize my breaks 
             by watching a random video on a specific topic related to coding.</p>
            </div>
             <div className="intro-img-2">
             <img src={Music} alt="hobby"/>
             </div>
             </div>
            
        </div>
        <Footer/>
        </>
    )
}

export default Newhome;