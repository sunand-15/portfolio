import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });
  return (
    <div id="contact">
      <motion.div 
      ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
          }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y:100 }}
          animate={inView ? { opacity: 1, y:0} : {}}
          transition={{
            delay:0.3,
            duration: 0.5,
          }}
         className="text-4xl font-bold text-white">
          lets Discuss Your <span className="text-purple-500">Project</span>
        </motion.h2>
        <motion.p
        ref={ref}
          initial={{ opacity: 0, y:100 }}
          animate={inView ? { opacity: 1, y:0} : {}}
          transition={{
            delay:0.3,
            duration: 0.5,
          }}
         className="text-slate-400 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo
          dignissimos, esciunt quod ad, ipsam amet voluptate neque eius, aperiam
          voluptans cupiditate itaque molestias quas nulla animi eum quam."
        </motion.p>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-col-1 md:grid-cols-2 gap-">
        <div className="space-x-6">
          <motion.div
          ref={ref}
          initial={{ opacity: 0, x:-50 }}
          animate={inView ? { opacity: 1, x:0} : {}}
          transition={{
            delay:0.,
            duration: 0.5,
          }}
           className="flex items-center space-x-4">
            <motion.div
            
          ref={ref}
          initial={{ opacity: 0, x:-50 }}
          animate={inView ? { opacity: 1, x:0} : {}}
          transition={{
            delay:0.2,
            duration: 0.5,
          }} 
            className="bg-purple-500 p-4 rounded-full ">
              <FaPhone className="text-white w-6 h-6" />
            </motion.div>
            <div>
              <p className="text-lg font-medium text-pink-500">Call Me</p>
              <p className="text-white">+8235299356</p>
            </div>
          </motion.div>
          <motion.div
          
          ref={ref}
          initial={{ opacity: 0, x:50 }}
          animate={inView ? { opacity: 1, x:0} : {}}
          transition={{
            delay:0.2,
            duration: 0.5,
          }} 
          className="flex items-center space-x-4">
            <div className="bg-purple-500 p-4 rounded-full ">
              <FaEnvelope className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-pink-500">Email</p>
              <p className="text-white">sunandsharma2019@gmail.com</p>
            </div>
          </motion.div>
          <motion.div 
          
          ref={ref}
          initial={{ opacity: 0, x:-50 }}
          animate={inView ? { opacity: 1, x:0} : {}}
          transition={{
            delay:0.2,
            duration: 0.5,
          }}
          className="flex items-center space-x-4">
            <div className="bg-purple-500 p-4 rounded-full ">
              <FaMapMarkerAlt className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-medium text-pink-500">Email</p>
              <p className="text-white">Behala</p>
            </div>
          </motion.div>
        </div>
        <motion.form
        
          ref={ref}
          initial={{ opacity: 0, x:50 }}
          animate={inView ? { opacity: 1, x:0} : {}}
          transition={{
            delay:0.8,
            duration: 0.5,
          }} 
        className="space-y-4 text-white ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="full name" className="border border-purple-500 p-4 rounded-md w-full" />
            <input type="text" placeholder="Your email" className="border border-purple-500 p-4 rounded-md w-full"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Phone number" className="border border-purple-500 p-4 rounded-md w-full"/>
            <input type="text" placeholder="Budget" className="border border-purple-500 p-4 rounded-md w-full"/>
          </div>
          <textarea placeholder="Message" className="border border-purple-500 p-4 rounded-md w-full gap-4"></textarea>
          <motion.button 
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          type="submit" className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-200 ">Submit Message</motion.button>
        </motion.form>
      </div>
      {/* footer */}
      <motion.div 
      
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1} : {}}
          transition={{
            delay:1,
            duration: 0.5,
          }}
      className="mt-48 flex justify-between items-center p-5 text-white border-t-2 border-purple-500 ">
        <p>0 2022, All Right Reserved</p>
        <p>Iron Coding</p>
        <div className="flex justify-center space-x-4 text-white mt-4 "> 
          <a className="hover:text-purple-500"><FaFacebook className="w-6 h-6"/></a>
          <a className="hover:text-purple-500"><FaTwitter className="w-6 h-6"/></a>
          <a className="hover:text-purple-500"><FaLinkedin className="w-6 h-6"/></a>
          <a className="hover:text-purple-500"><FaInstagram className="w-6 h-6"/></a>
          
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
