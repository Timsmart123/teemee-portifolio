import React ,{ useState } from "react";
import video from "./coding-stock.mp4";
import travel from "./Travel_Agency_bblin.jpg";
import excel from "./ExcelHR_Yup.jpg";
import "./Trialapp.css";
import hacker from "./undraw_programming_j1zw.svg"

export default function Trialapp() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <About />
      <Contact />
    </>
  );
}


/* ---------------- NAVBAR ---------------- */
function Navbar() {
  return (
    <div className="Navbar">
      <h2>TEE MEE</h2>
      <div id="nav-links">
        <a href="#hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <div id="hero">
      <div className="video-bg">
        <video className="video-bg" autoPlay muted loop >
        <source src={video} type="video/mp4" />
      </video>
      </div>
      
      {/* <video className="video-bg" autoPlay muted loop>
        <source src="https://media.istockphoto.com/id/2172390006/video/computer-code-scrolling-on-a-black-screen.mp4?s=mp4-640x640-is&k=20&c=gyw0rpc2UEYO2bYJG5FBUxmOsBN2HpzICIROuexN6pQ=" type="video/mp4"/>
      </video> */}

      <div className="Hero" >
        <h2>Building clean, fast, and modern web experiences</h2>
        <p>
          <i>
            Frontend developer focused on responsive, accessible, and
            user-friendly interfaces.
          </i>
        </p>

        <div className="btns">
          <a href="#contact">Hire Me!</a>
          <a href="#projects">View Projects</a>
        </div>
      </div>
      <hr/>
    </div>
  );
}

/* ---------------- PROJECTS ---------------- */

function Project(){
  return(
    <section className="project" id="projects">
      <h1>PROJECTS</h1>
      {/* Normal Row */}
      <ProjectRow 
        img={excel} 
        html="HTML" 
        css="CSS" 
        js="JavaScript" 
        react="ReactJS" 
        title='Excel HR' 
        link='https://excelhr.vercel.app'
        script="A small HR-focused project integrating UI logic and React concepts." 
      />

      {/* Reversed Row */}
      <ProjectRow 
        img={travel} 
        html="HTML" 
        css="CSS" 
        js="JavaScript" 
        title='Travel Agency' 
        link='#'
        script="A prototype travel agency website designed for booking and agent connections."  
        reversed
      />

      {/* Normal Row */}
      {/* <ProjectRow html="HTML" /> */}
      <hr/>
    </section>
  )
}


/* ---------- PROJECTROW COMPONENT ---------- */
function ProjectRow({html,css,js,react,img,reversed,title,script,link}){
  const tech = [html,css,js,react].filter(Boolean)
  // removes empty item in array or props w no value
  
  return(
    <div className={`projectRow ${reversed ? "Reversed" : ""}`}>
      <div>
        <img src={img} />
      </div>
      <div className="descript">
        <h2>{title}</h2>
        <p>{script}</p>
        <p>Tech: {tech.join(", ")}{/* Joins each of the tech array by comma  */}</p>
        <a className="projectBtn" href={link}>View Project</a>
      </div>
      <hr/>
    </div>
  )
}


function About(){
  return(
    <section id="about">
      <h1>About</h1>
      <div className="info">
        <p>I’m a frontend developer in progress, learning by building real projects and improving my understanding of layout, responsiveness, and UI structure. <br /><br />I’m especially interested in creating clean designs that work well on all devices, and I enjoy refining details until things feel right.</p>
        <div><img src={hacker} alt=""/></div>
      </div>
      <hr/>
    </section>
  )
}

function Contact(){
  return(
    <section id="contact">
      <h1>Contact</h1>
      <>
        <p><strong>Let’s work together</strong></p>
        <p>Got a project or internship in mind? Let’s talk.</p>
        <span className="contactLinks">
          <a href="mailto:your@email.com">Email</a>
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
        </span>
      </>
    </section>
  )
}
