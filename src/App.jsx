import React, { useEffect, useRef } from "react";
import "./App.css";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
} from "react-icons/ai";
import { DiNodejs } from "react-icons/di";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { data } from "./data/project";
import { SiSocketdotio } from "react-icons/si";
import { SiRedux } from "react-icons/si";

import profile_pic from "./image/profile_pic.jpg";

const App = () => {
  const cardRef = useRef(null);
  // const card2Ref = useRef(null);
  const cardRef2 = useRef(null);
  // const card2Ref2 = useRef(null);
  const navRef = useRef(null);
  const helloRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // tl.set(cardRef.current, {x: -300, opacity: 0 });

    tl.fromTo(
      cardRef.current,
      { x: -300, opacity: 0 },
      {
        x: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: cardRef.current,
          scrub: true,
          start: "top 90%",
          end: "bottom 40%",
        },
      }
    );
    // tl.fromTo(
    //   card2Ref.current,
    //   { x: -200, opacity: 0 },
    //   {
    //     x: 150,
    //     duration: 1.5,
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: card2Ref.current,
    //       scrub: true,
    //       start: "top 90%",
    //       end: "bottom 40%",
    //     },
    //   }
    // );
    tl.fromTo(
      cardRef2.current,
      { x: 300, opacity: 0 },
      {
        x: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: cardRef2.current,
          scrub: true,
          start: "top 90%",
          end: "bottom 60%",
        },
      }
    );
    // tl.fromTo(
    //   card2Ref2.current,
    //   { x: 200, opacity: 0 },
    //   {
    //     x: -140,
    //     duration: 1,
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: card2Ref2.current,
    //       scrub: true,
    //       start: "top 90%",
    //       end: "bottom 60%",
    //     },
    //   }
    // );

    tl.set(navRef.current, { height: 0, bottom: 0 });
    tl.to(navRef.current, { height: 100, duration: 1, ease: "power2.inOut" });

    tl.fromTo(helloRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1 });
  }, []);

  useEffect(() => {
    var btn = document.getElementById("btn");

    btn.addEventListener(
      "click",
      (e) => {
        e.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var msg = document.getElementById("msg").value;

        var body =
          "Name: " +
          name +
          "<br/> Email: " +
          email +
          "<br/> Subject: " +
          subject +
          "<br/> Message: " +
          msg;

        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "mohitsaw19@gmail.com",
          Password: "0620C1D6F9691933BFDB1A34424AA042EA92",
          To: "mohitsaw19@gmail.com",
          From: "mohitsaw19@gmail.com",
          Subject: subject,
          Body: body,
        }).then(
          alert("Email Sent..."),
          (document.getElementById("name").value = ""),
          (document.getElementById("email").value = ""),
          (document.getElementById("subject").value = ""),
          (document.getElementById("msg").value = "")
        );
      },
      []
    );
  });

  return (
    <>
      <div className="container">
        <div className="nav ">
          <div ref={navRef} className="items ">
            <div className="logo flex-center">
              <div className="logo-left">M</div>
              <div className="logo-right">
                <p className="first-txt">Mohit Kumar</p>
                <p className="sec-txt">Personal</p>
              </div>
            </div>

            <div className="list flex-center">
              <ul className="flex-center">
                <li>
                  <a href="#aboutSec">
                    About <span className="line line1"></span>
                    <span className="line line2"></span>
                  </a>
                </li>
                <li>
                  <a href="#sec2">
                    Services<span className="line line1"></span>
                    <span className="line line2"></span>
                  </a>
                </li>
                <li>
                  <a href="#sec3">
                    Portfolio<span className="line line1"></span>
                    <span className="line line2"></span>
                  </a>
                </li>
                <li>
                  <a href="#mapSec">
                    Contact<span className="line line1"></span>
                    <span className="line line2"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact">
              <button>
                <p>
                  <FaRegPaperPlane />
                </p>
                <a href="#mapSec">Let's Talk</a>
              </button>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="info-left">
            <p ref={helloRef}> Hello Welcome</p>
            <div className="text first-text">I'm Mohit</div>
            <div className="text sec-text">Web-Developer</div>
            <div className="buttons">
              <a href="#mapSec" className="btn">
                <p>
                  <FiMail />
                </p>
                Hire me
              </a>

              <button className="link">
                <a href="#sec3">See portfolio</a>
              </button>
            </div>
            <div className="about">
              <p>
                Passionate artist and MERN stack IOS, Android and Web developer.
                Creating captivating interfaces and robust applications,
                blending aesthetics and functionality. Committed to delivering
                beautiful web experiences.
              </p>
            </div>

            <div className="social">
              <p>Follow me:</p>
              <i>
                <a href="https://www.instagram.com/montykumar5597/">
                  {" "}
                  <AiFillInstagram />
                </a>
              </i>
              <i>
                <a href="https://github.com/Mohit-kumar-saw">
                  {" "}
                  <AiFillGithub />
                </a>
              </i>
              <i>
                <a href="https://www.linkedin.com/in/mohit-kumar-83048422a/">
                  <AiFillLinkedin />
                </a>
              </i>
            </div>
          </div>

          <div className="info-img">
            <img className="center" src={profile_pic} alt="" />
          </div>

          <div className="info-right">
            <div className="numbers">
              <h1>1+</h1>
              <p>Years of experience</p>
            </div>
            <div className="numbers">
              <h1>99%</h1>
              <p>Success Rate</p>
            </div>
            <div className="numbers">
              <h1>10+</h1>
              <p>Happy Client</p>
            </div>
            <div className="numbers">
              <h1>50+</h1>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>

        <div id="aboutSec" className="section">
          <h1>What do I help</h1>
          <p>
            As an artist-turned-MERN stack web developer, I bring a unique
            perspective to the table. With my understanding of aesthetics and
            user interfaces, combined with my backend knowledge, I can create
            visually appealing and highly functional web applications that truly
            resonate with users.
          </p>
        </div>

        <div id="sec2" className="section2">
          <div className="left-sec">
            <div ref={cardRef} className="card">
              <h3 className="card-heading">Frontend Developer</h3>
              <div className="logos">
                <i className="html">
                  <AiFillHtml5 />
                </i>
                <i className="css">
                  <BiLogoCss3 />
                </i>
                <i className="js">
                  <BiLogoJavascript />
                </i>
                <i className="tw">
                  <SiTailwindcss />
                </i>
                <i className="react">
                  <FaReact />
                </i>
                <i className="gsap">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"
                    width={"40px"}
                    alt=""
                  />
                </i>
              </div>
            </div>
            <div className="card2">
              <h3 className="card-heading">Frontend Developer</h3>
              <div className="logos">
                <i className="html">
                  <AiFillHtml5 />
                </i>
                <i className="css">
                  <BiLogoCss3 />
                </i>
                <i className="js">
                  <BiLogoJavascript />
                </i>
                <i className="tw">
                  <SiTailwindcss />
                </i>
                <i className="react">
                  <FaReact />
                </i>
                <i className="react">
                <SiRedux />      
                          </i>
                <i className="gsap">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"
                    width={"40px"}
                    alt=""
                  />
                </i>
              </div>
            </div>
            <div className="card2">
              <h3 className="card-heading">Backend Devlopment</h3>

              <div className="logos">
                <i className="nodejs">
                  <DiNodejs />
                </i>
                <i className="mongodb">
                  <SiMongodb />
                </i>
              </div>
            </div>
          </div>
          <div className="sec-line"></div>
          <div className="right-sec">
            <div ref={cardRef2} className="card">
              <h3 className="card-heading">Backend Devlopment</h3>

              <div className="logos">
                <i className="nodejs">
                  <DiNodejs />
                </i>
                <i className="mongodb">
                  <SiMongodb />
                </i>
                <i className="mongodb">
                <SiSocketdotio />
                                </i>
              </div>
            </div>
          </div>
        </div>

        <div id="sec3" className="projects">
          <div className="top">
            <div className="heading">
              {" "}
              <h1>My recent projects</h1>
            </div>
            <div className="button">
              <button>All</button>
              <button>Web Design</button>
              <button>UX Design</button>
            </div>
          </div>
          <div className="project-card">
            {data.map((item) => {
              "";
              console.log(item.name);
              return (
                <div key={item.id} className="card-box">
                  <a href={item.link}>
                    <img id="project-img" src={item.image} alt="" />
                  </a>
                  <p id="title">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div id="mapSec" className="map">
          <div className="map-top">
            <h1>Get in touch</h1>
          </div>
          <div className="map-bottom">
            <div className="map-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8459883963124!2d85.79996237475642!3d22.547441333893097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1e27c9bffbed5f%3A0xb127c8921e6b014c!2sGandhi%20Tola!5e0!3m2!1sen!2sin!4v1699763536699!5m2!1sen!2sin"
                width="550"
                height="400"
                style={{ marginRight: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-right">
              <form method="POST">
                <input type="text" placeholder="Enter your name " id="name" />
                <input type="text" placeholder="Enter your email" id="email" />
                <input type="text" placeholder="Subject" id="subject" />
                <textarea
                  id="msg"
                  cols="30"
                  rows="10"
                  placeholder="Write your message"
                ></textarea>
                <input id="btn" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="mid-footer">
          <div className="mid-left">
            <p>
              Unleash your artistic prowess to fashion exquisite products
              that radiate beauty.
            </p>
            <button className="btn">
              <p>
                <FiMail />
              </p>
              Hire me
            </button>
          </div>
          <div className="mid-right">
            <p>
              Passionate Artist, MERN stack developer and UI/UX designer
              creating captivating web experiences. Blending aesthetics and
              functionality to deliver beautiful and user-friendly applications.
            </p>

            <div className="social">
              <p>Follow me:</p>
              <i>
                <a href="https://www.instagram.com/montykumar5597/">
                  {" "}
                  <AiFillInstagram />
                </a>
              </i>
              <i>
                <a href="https://github.com/Mohit-kumar-saw">
                  {" "}
                  <AiFillGithub />
                </a>
              </i>
              <i>
                <a href="https://www.linkedin.com/in/mohit-kumar-83048422a/">
                  <AiFillLinkedin />
                </a>
              </i>
            </div>
          </div>
        </div>

        <div className="foot-nav">
          <div className="list flex-center">
            <ul className="flex-center">
              <li>
                <a href="#aboutSec">
                  About <span className="line line1"></span>
                  <span className="line line2"></span>
                </a>
              </li>
              <li>
                <a href="#sec2">
                  Services<span className="line line1"></span>
                  <span className="line line2"></span>
                </a>
              </li>
              <li>
                <a href="#sec3">
                  Portfolio<span className="line line1"></span>
                  <span className="line line2"></span>
                </a>
              </li>
              <li>
                <a href="#mapSec">
                  Contact<span className="line line1"></span>
                  <span className="line line2"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-foot">
          <p>Copyright 2023 developed by mohit kumar- All right reserved.</p>
        </div>
      </div>
    </>
  );
};

export default App;
