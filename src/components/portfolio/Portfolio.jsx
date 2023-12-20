import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title:"Pyzaql",
        img:"https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Edtech website that is doing edtech things to edtech customers and we provide the backend infrastructure needed for an edtech",    
    },
    {
        id:2,
        title:"Qbits Learning",
        img:"https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Saas platform that provides software solutions for edtechs and other businesses",    
    },
    {
        id:3,
        title:"VridVika",
        img:"https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"An online learning Platform for Senior Citizens where they can learn basic tech usage and internet security",    
    },
    {
        id:4,
        title:"Educational Content",
        img:"https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"We make educational content randing from Audio Recordings, VO, Content Creation, SME management, etc",    
    },
];

const Single = ({item}) => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref, 
        //offset:["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0,1], [ -500, 500 ]);
    const x = useTransform(scrollYProgress, [0,1], [ 500, -500 ]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="portfolio-image" />
                    </div>
                    <motion.div className="textContainer" style={{ y }} >
                        <h2>{item.title}</h2>
                        <p >{item.desc}</p>
                        <motion.button whileHover={{ scale:"1.10"}} whileTap={{ scale:"0.90" }} >Check it out</motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"]});
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping:30,
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Portfolio</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio