import Herosvg from "./Herosvg";
import "./hero.scss"
import { motion } from "framer-motion";
const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition:{
            duration: 2,
            repeat:Infinity,
        }
    }
};

const sliderVariants = {
    initial:{
        x: 0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
};

const Hero = () => {
  return (
      <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>CRAVEDIGI</motion.h2>
                <motion.h1 variants={textVariants}> Tech and IT solutions</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>Our work</motion.button>
                    <motion.button variants={textVariants}>Hire Us</motion.button>
                </motion.div>
                <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
            Web Development Tech/IT Content Instructors EdTech
        </motion.div>
        <div className="imageContainer">
            <Herosvg />
        </div>
    </div>
  )
}

export default Hero