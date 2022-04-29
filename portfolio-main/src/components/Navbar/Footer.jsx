import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineMail,
  AiOutlineMedium,
} from "react-icons/ai";

const Footer = () => {
  return (
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
      <h3>Call : +91 7875439287</h3>

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
  );
};

export { Footer };
