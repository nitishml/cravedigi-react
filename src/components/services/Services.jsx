import { useRef } from "react"
import "./services.scss"
import { motion, useInView } from "framer-motion"

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y: 0,
        transition:{
            //type:"spring",
            duration: 0.5,
            staggerChildren:0.1,
        }
    }
}

const serviceItems = [
    {
        title:"Web App Development",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste a error voluptas quidem sapiente recusandae, ",
        link:"/#webDev"
    },
    {
        title:"Mobile App Development",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste a error voluptas quidem sapiente recusandae, ",
        link:"/#mobileAppDev"
    },
    {
        title:"Educational Services",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste a error voluptas quidem sapiente recusandae, ",
        link:"/#eduSer"
    },
    {
        title:"Tech/IT Services",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste a error voluptas quidem sapiente recusandae, ",
        link:"/#techItSer"
    },
]
const Services = () => {
    const ref = useRef()
    const isInVIew = useInView(ref, {margin:"-100px"})
  return (
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate" ref={ref} >
        <motion.div className="textContainer" variants={variants}>
            <p>We can digitize/automate 
            <br /> the services you need</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"aqua"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"aqua"}}>For your </motion.b> Business
                </h1>
                <button>Learn More</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            {serviceItems.map((item, index)=>(
                <motion.div className="box" key={index} whileHover={{background:"lightgray", color:"black"}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>GO</button>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services