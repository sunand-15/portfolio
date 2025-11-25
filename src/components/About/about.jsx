import React from "react";
import { motion } from "motion/react";
import Avatar from "../../assets/Avatar.jpg";
import { useInView } from "react-intersection-observer";

const about = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div id="about" className="text-white py-16 ">
      <motion.div
      ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
          }}
       className="container mx-auto px-4 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="text-3xl md:text-4xl font-bold mb-8 underline "
        >
          About Me
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: 0.6,
            duration: 0.5,
          }}
          className="mb-12 text-shadow-gray-400 text-center"
        >
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid earum
          hic architecto similique laboriosam? Pariatur maiores. */}
        </motion.p>
        <div className="flex flex-row justify-center items-center">
          <div>
            <motion.img 
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.6,
              duration: 0.5,
            }}
            src={Avatar} alt="Avatar" className=" mx-auto w-1/2 md:w-10/12  rounded-full"/>
          </div>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.6,
              duration: 0.5,
            }}
            className="md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl "
          >Highly motivated web developer with a strong technical background and a passion for building user-centric websites. Proficient in front-end and back- end technologies, eager to learn and contribute to a collaborative team environment. Fluent in English and Hindi.
          </motion.p>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.6,
            duration: 0.5,
          }}
          className="flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0 "
        >
          <div className="text-center ">
            <motion.h3 className="text-3xl md:text-8xl font-bold md:my-6 text-purple-500">
              5+
            </motion.h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: 0.6,
                duration: 0.5,
              }}
              className="text-sm sm:text-base text-gray-300"
            >
              Year Of Experience
            </motion.p>
          </div>

          <div>
            <h3 className="text-3xl md:text-8xl font-bold md:my-6 text-purple-500">
              50+
            </h3>
            <motion.p ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.6,
                duration: 0.5,
              }} className="text-sm sm:text-base text-gray-300">
              Overall Global Customer{" "}
            </motion.p>
          </div>

          <div>
            <h3 className="text-3xl md:text-8xl font-bold md:my-6 text-purple-500">
              90+
            </h3>
            <motion.p 
            initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: 0.6,
                duration: 0.5,
              }}
            className="text-sm sm:text-base text-gray-300">projects i have made</motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default about;
