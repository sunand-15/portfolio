import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.jpg"
import image4 from "../../assets/image4.jpg"
import Companies from "../Companies/Companies";

const work = () => {
  const project = [
    {
      id: 1,
      title: "sunand",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo dignissimos, nesciunt quod ad, ipsam amet voluptate neque eius, aperiam voluptas cupiditate itaque molestias quas nulla animi eum quam.",
      img: image2,
      link: "#",
    },
    {
      id: 2,
      title: "sunand2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo dignissimos, nesciunt quod ad, ipsam amet voluptate neque eius, aperiam voluptas cupiditate itaque molestias quas nulla animi eum quam.",
      img: image3,
      link: "#",
    },
    {
      id: 3,
      title: "sunand3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo dignissimos, nesciunt quod ad, ipsam amet voluptate neque eius, aperiam voluptas cupiditate itaque molestias quas nulla animi eum quam.",
      img: image4,
      link: "#",
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div id="work" className="py-12 ">
      <motion.div 
      ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
          }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y:100 }}
          animate={inView ? { opacity: 1, y:0} : {}}
          transition={{
            delay:0.3,
            duration: 0.5,
          }}
          className="text-4xl text-white underline font-bold text-center mb-12"
        >
          MY Work
        </motion.h2>
        <motion.p
        ref={ref}
          initial={{ opacity: 0, y:100 }}
          animate={inView ? { opacity: 1, y:0} : {}}
          transition={{
            delay:0.3,
            duration: 0.5,
          }} 
        className="mb-12 text-gray-400 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque, animi soluta, sed volupt.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {project.map((project) => (
            <motion.div
            ref={ref}
          initial={{ opacity: 0, y:50 }}
          animate={inView ? { opacity: 1, y:0} : {}}
          transition={{
            delay:project.id * 0.2,
            duration: 0.5,
          }}
              key={project.id}
              className="bg-gray-900 shadow-lg rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500 transform hover:scale-105   transition duration-300 ease-in-out"
            >
              <img src={project.img} className="w-full h-70" />
              <div className="py-6">
                <h3 className="text-xl text-white font-semibold ">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 ">{project.description}</p>
                <button className="border-2 border-purple-500 text-purple-500 px-5 py-2 rounded-full hover:bg-purple-500 hover:text-white  transition ">
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
        ref={ref}
          initial={{ opacity: 0, y:100 }}
          animate={inView ? { opacity: 1, y:0} : {}}
          transition={{
            delay:0.7,
            duration: 0.5,
          }}
        >
            <Companies />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default work;








