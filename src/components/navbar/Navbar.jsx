import "./navbar.scss"
import { FaFacebookF, FaInstagram, FaYoutube,FaLinkedin   } from "react-icons/fa";
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar />
        <div className="wrapper">
            <motion.span 
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            >CraveDigi</motion.span>
            <div className="social">
                <a href="#"><FaFacebookF/></a>
                <a href="#"><FaInstagram/></a>
                <a href="#"><FaYoutube/></a>
                <a href="#"><FaLinkedin/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar