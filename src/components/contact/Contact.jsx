import { useRef, useState } from "react";
import "./contact.scss"
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants={
    initial:{
        y:-100,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        },
    },
};
const Contact = () => {
    const ref = useRef()
    const formRef = useRef()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9rzz9tn', 'template_h1e4ebl', formRef.current, '03CIXu5XUdusIl9Os')
          .then((result) => {
            setSuccess(true)
        }, (error) => {
            setError(true)
        });
      };
    const isInView = useInView( ref, {margin: "-100px"})
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate" ref={ref}>
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Get in Touch</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>hello@cravedigi.com</span>        
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Bengaluru Karnataka India</span>        
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+91 1234567890</span>        
            </motion.div>
        </motion.div>
        <div className="formContainer">

           <motion.div className="contactSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3, duration:1}} >
           
            <svg width="450px" height="450px" viewBox="0 0 24 24">
                <motion.path 
                    fill="none" 
                    strokeWidth={2}
                    initial={{
                        pathLength: 0
                    }}
                    animate={isInView && { pathLength: 1}}
                    transition={{duration: 3}}
                    d="M19 15V21M19 21L21 19M19 21L17 19M13 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V11M20.6067 8.26204L15.5499 11.6333C14.2669 12.4886 13.6254 12.9163 12.932 13.0824C12.3192 13.2293 11.6804 13.2293 11.0677 13.0824C10.3743 12.9163 9.73279 12.4886 8.44975 11.6333L3.14746 8.09839"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
            />
            </svg>
           </motion.div>


            <motion.form ref={formRef} action="" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4, duration:1}} onSubmit={sendEmail}>
                <input type="text" required placeholder="Name" name="from_name"/>
                <input type="email" required placeholder="Email" name="email" />
                <textarea placeholder="Message" rows={8} name="message" />
                <button>Submit</button>
                {error && "Failure"}
                {success && "Mail Sent"}
            </motion.form>
        </div>
    </motion.div>
  )
}

export default Contact