import { useRef } from "react"
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = ({type}) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })
    const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);

    const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);

    const scaleOut = useTransform(scrollYProgress, [0,1], ["100%", "1000%"]);
    const scaleIn = useTransform(scrollYProgress, [0,1], ["100%", "0%"]);

    const yBg2 = useTransform(scrollYProgress, [0,1], ["0%", "-100%"]);


  return (
    <div ref={ref} className="parallax" 
    style={{
        background:
            type === "services" 
                ? "linear-gradient(180deg, #111132, #0c0c1d)" 
                : "linear-gradient(180deg, #111132, #505064)"
        }}
        >
        <motion.h1 style={type==="services" ? {  y: yText } : {  scale: scaleIn }}>
            {type==="services" ? "Our Services" : "Our Work"}
            </motion.h1>
        <motion.div style={{ scale: scaleOut }} className="mountains"></motion.div>
        <motion.div 
        style={{ 
            y: yBg,
            backgroundImage: `url(${type==="services" ? "/planets.png" : "/sun.png"})`
         }} className="planets" ></motion.div>
        <motion.div style={type==="services" ? { x: yBg2 } : { x: yBg}} className="stars" ></motion.div>
    </div>
  )
}

export default Parallax