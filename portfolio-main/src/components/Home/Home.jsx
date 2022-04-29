import React from 'react';
import styles from './Home.module.css'
import { TimeLineComponent } from './TimeLineCompoenet'
import { AiFillGithub,AiFillLinkedin,AiFillMail,AiOutlineMail,AiOutlineMedium } from "react-icons/ai";
import { TextAnimation } from './TextAnimated';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Skills } from '../Skills/Skills';
import { Project } from '../Projects/Project';

const Home=()=>{

    React.useEffect(()=>{
        Aos.init({}) ;
    },[])
    return(
        <>
        <div className={styles.homeTopBanner} data-aos = 'zoom-in-up' data-aos-duration="1500" >
           <div className={styles.homeImageDiv}>
             {/* <img className={styles.homeImage} src='homeImg.svg' alt='home image'/> */}
             <img className={styles.homeImage} src='anime1.png' alt='home image'/>

             <div className={styles.homeAbout} data-aos = 'flip-down' data-aos-duration="2500">
                  <h1>Hi 👋, </h1>
                  <h1>I'm Tejaswini Khengare !!!</h1>
                  {/* <h1>I'm Gayathry. </h1>
                  <h1>Welcome to my portfolio ! </h1> */}
                 
                  <div>
                        {/* I am a passionate Full Stack Web Developer who focuses on writing clean 
                        <br/>and user-friendly applications using 
                        <br/> */}

                        {/* JavaScript / Reactjs /Nodejs/ MongoDb  */}
                        <div>
                        <TextAnimation />
                        </div>
                        
                         {/* <br/> */}
                         {/* <div> */}
                             {/* and some other cool libraries and frameworks. */}
                         {/* </div> */}
                  </div>    

                  <div className={styles.profile__icons}> 
                            <a href='https://github.com/Tejaswini179' target="_blank" rel="noreferrer">
                            <AiFillGithub/>
                            </a>
                        

                       
                        <a href='https://www.linkedin.com/in/tejaswini-k9/' target="_blank" rel="noreferrer">
                            <AiFillLinkedin/>
                        </a>

                        
                        <a href="mailto:khengaretejaswini@gmail.com" target="_blank" rel="noreferrer">
                        <AiOutlineMail/>
                        </a>
                        </div>
                      
                        
                        {/* <div className={styles.profile__icons}> 
                        <a href='https://gayathryjm.medium.com/' target="_blank" rel="noreferrer">
                        <AiOutlineMedium/>
                        </a>
                        </div> */}

                     
            </div>

           </div>
        </div>

        <div id="about" className={styles.homeTopBanner1} data-aos = 'fade-in' data-aos-offset="200" data-aos-duration="1000" >
            <div className={styles.profile} >
                    <div className={styles.profile__pic__border} data-aos = 'zoom-in-left' data-aos-offset="250" data-aos-duration="1000">   
                        <img className={styles.profile__pic} src='profile.png' alt='home image'/>
                        
                       
                    </div>

                    <div  className={styles.profile__details}data-aos = 'zoom-in-right' data-aos-offset="250" data-aos-duration="1000" >
                        <h1 className='about'> About Me</h1>
                        <div> A passionate Full Stack Web Developer an enthusiastic individual with a zeal to learn, explore and grow.

                  I love designing websites and I am looking for more opportunities to work in coding that would help to showcase my skills and enhance my career.

                 
                        </div>
                    </div>
            </div>

            <div>
            </div>

           
        </div>

        {/* <div className={styles.timeline} data-aos = 'fade-in' data-aos-offset="300" data-aos-duration="1000">
                <h1 className={styles.timeLine__h1}>{`Timeline`}</h1>
                    <TimeLineComponent/>
        </div> */}
        <Skills/>
        <Project/>

        </>
    )
}

export {Home}