import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineMail,
  AiOutlineMedium,
} from "react-icons/ai";
import styles from './Navbar.module.css';
import React, { useEffect } from 'react';
import GitHubCalendar from "react-github-calendar";

const Footer = () => {
 
  return (
    <div>
    <div id="stats" style={{
        textAlign: "center",
        padding: "1%",
        margin: "0px auto",
      }} >
      <pre>
      <h1 className={styles.proh1}  style={{color:"rgb(16,135,235)",fontSize: '30px', fontFamily: "'Montserrat', sans-serif"}}>Github Stats</h1>
     </pre>
     <pre></pre>
      <div>
        <img
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=tejaswini179&show_icons=true&locale=en&layout=compact"
          alt=""
        />

        <div id="statsimg">
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=tejaswini179&show_icons=true&locale=en"
            alt=""
          />
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=tejaswini179"
            alt=""
          />
        </div>
      </div>
    </div>
    <div>
      {/* Include the script source in the HTML file where you import this component */}
      {/* Optionally, include the theme (if you don't want to struggle to write the CSS) */}
      {/* Make sure to add the CSS link in the HTML file where you import this component */}
  

    </div>
    <pre></pre>
    <pre></pre>
    <div id="stats" style={{
        textAlign: "center",
        padding: "1%",
        margin: "0px auto",
      }}>
      <h1 className={styles.proh1}  style={{color:"rgb(16,135,235)",fontSize: '30px', fontFamily: "'Montserrat', sans-serif"}}>Github Contribution Graph</h1>
      <div>
      <GitHubCalendar style={{
        textAlign: "center",
        padding: "1%",
        margin: "0px auto",
      }} username="Tejaswini179" />
      </div>
    </div>
    <div
      id="contact"
      style={{
        background: "white",
        textAlign: "center",
        padding: "1%",
        margin: "0px auto",
      }}
    >
      <h1
        style={{
          color: "rgb(16,135,235)",
          fontSize: "35px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        Contact Me
      </h1>

      <h3>Email:  khengaretejaswini@gmail.com</h3>
      <h3>Phone : +91 7875439287</h3>

      <div>
        <a
          style={{ color: "black", fontSize: "35px" }}
          href="https://github.com/Tejaswini179"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>

        <a
          style={{ color: "black", fontSize: "35px" }}
          href="https://www.linkedin.com/in/tejaswini-k9/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>

        {/* <div className={styles.profile__icons}> 
                        <a href='https://gayathryjm.medium.com/' target="_blank" rel="noreferrer">
                        <AiOutlineMedium/>
                        </a>
                        </div> */}
      </div>

      <p style={{ color: "gray", fontSize: "12px" }}>
        © 2022 Designed and Built by Tejaswini with 💙.{" "}
      </p>
    </div>
    </div>
  );
};

export { Footer };
