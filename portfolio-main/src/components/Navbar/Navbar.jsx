import React from "react"
// import {NavLink} from "react-router-dom"
import { HashLink as NavLink } from "react-router-hash-link"
import styles from "./Navbar.module.css"

const Navbar=()=>{
    return(
        <header className={styles.navbar_back}>

          <div className={styles.navbar_flex2}>

            <div id='home'>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://drive.google.com/uc?export=download&id=1mTnL5Z1LgeJhFaPUFgMdfknTuaZU3DaO"
              download="YourResume.pdf"
            >
              Resume
            </a>
            </div>
          </div>

          <div className={styles.navbar_flex1}>
          <div > <NavLink to="#home" className={styles.text_link} activeStyle={{color:'black'}} exact>Home</NavLink>  </div>
             <div > <NavLink to="#about" className={styles.text_link} activeStyle={{color:'black'}} exact>About</NavLink>  </div>
             <div> <NavLink to="#skills"  className={styles.text_link} activeStyle={{color:'black'}}>Skills</NavLink>  </div>
             <div> <NavLink to="#projects" className={styles.text_link} activeStyle={{color:'black'}}>Projects</NavLink> </div>
             <div> <NavLink to="#contact" className={styles.text_link} activeStyle={{color:'black'}}>Contact</NavLink> </div>  
             {/* <div> <NavLink to="/experience" className={styles.text_link}>Experience</NavLink>  </div>  */}
             {/* <div> <NavLink to="/contact" className={styles.text_link}>Contact</NavLink>  </div> */}
          </div>

        </header>

    )

}

export {Navbar}
