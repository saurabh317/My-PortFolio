import React from 'react'
import portfolio from "../../../assets/portfolio.jpg"
import "./Home.scss"
import { motion } from 'framer-motion';
// import { init } from 'ityped';
// import { useEffect,useRef } from 'react';
// import Typewriter from 'typewriter-effect';


const Home = () => {

  // const textRef = useRef();
  // useEffect(()=>{
  //   // console.log(textRef);
  //   init(textRef.current,{
  //     showCursor:false,
  //     strings:["Front-End Developer" ,"Web Designer","Coder"],
  //   }

  //   )

  // },[ ]);
  const moveVariants = {
    animation: {
      y: [ 0, -15 ],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <div id="home">
      <motion.div className="container " id='home'
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={
          {
            duration: 2,
            delay: 0.5
          }
        }
      >
        <div className="profile">
          <img src={portfolio} alt="portfolio" />
        </div>
        <div className="profile_text">
          <h3 className='name'>Hi  I'm <span>Saurabh Sagar Pandey</span> </h3>
          <h3 className='job'>Front-End Developer<span> Based on India </span></h3>
          <div className='skill-container'>
            <div
              className="web">
              Web Developer
            </div>
            <div
              className="ui"
            >
              UI/UX Designer
            </div>
            <div
              className="freelance"
            >
              Freelancer
            </div>
          </div>
          <span className='text'>Passionate<br /> to craft innovative <br />  web products.</span>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            variants={moveVariants}
            animate="animation"
            className='connect-btn'
          >
            connect with me</motion.a>
         
        </div>
      </motion.div>
    </div>
  )
}

export default Home;