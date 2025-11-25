import React from "react";
import { motion } from "motion/react";
import Avatar from "../../assets/Avatar.jpg";
const hero = () => {
  return (
    <div className="text-white py-10">
      <motion.img
       initial={{ opacity: 0, scale:0 }}
          animate={{ opacity: 1, scale:1 }}
          transition={{
            delay: 0.5,
            duration: 0.5
          }}
       src={Avatar} alt="Avatar" className=" mx-auto w-2/3 md:w-1/3 lg:w-1/4 rounded-full"/>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="container mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="text-4xl  md:text-5xl flex flex-col gap-4 font-bold  "
        >
          your story ,your way
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.5,
            }}
            className="text-purple-500"
          >
            {" "}
            buid your personal portfolio
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="text-gray-400 text-lg mb-8"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          ipsa autem quis. Quo molestiae quae earum recusandae maiores, expedita
          officia deleniti reiciendis nesciunt cupiditate, sint mollitia,
          commodi ipsam voluptatum aliquam.
        </motion.p>
        <div className="flex justify-center space-x-4 mb-10">
          <motion.button 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="bg-purple-500 text-white px-6 py-3 rounded-full">
            Hire me{" "}
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="text-white border-white  border px-6 py-3 rounded-full">
            {" "}
            my story{" "}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default hero;
