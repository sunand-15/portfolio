import { div } from "motion/react-client";
import React from "react";
import { FaAppStore } from "react-icons/fa";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const service = () => {
  const serviceData = [
    {
      title: "App design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo dignissimos, nesciunt quod ad, ipsam amet voluptate neque eius, aperiam voluptas cupiditate itaque molestias quas nulla animi eum quam.",
    },
    {
      title: "App design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo dignissimos, nesciunt quod ad, ipsam amet voluptate neque eius, aperiam voluptas cupiditate itaque molestias quas nulla animi eum quam. ",
    },
    {
      title: "App design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo dignissimos, nesciunt quod ad, ipsam amet voluptate neque eius, aperiam voluptas cupiditate itaque molestias quas nulla animi eum quam.",
    },
    {
      title: "App design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo dignissimos, nesciunt quod ad, ipsam amet voluptate neque eius, aperiam voluptas cupiditate itaque molestias quas nulla animi eum quam. ",
    },
    {
      title: "App design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo dignissimos, nesciunt quod ad, ipsam amet voluptate neque eius, aperiam voluptas cupiditate itaque molestias quas nulla animi eum quam. ",
    },
    {
      title: "App design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo dignissimos, nesciunt quod ad, ipsam amet voluptate neque eius, aperiam voluptas cupiditate itaque molestias quas nulla animi eum quam. ",
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div id="service" className="text-white py-16 ">
      <motion.div 
      ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
          }}
      className="container mx-auto px-4 text-center ">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 underline">
          Service
        </h2>
        <p className="mb-12 text-gray-400 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo
          dignissimos, nesciunt quod ad, ipsam amet voluptate neque eius,
          aperiam voluptas cupiditate itaque molestias quas nulla animi eum
          quam. Non?psa, iste? Inventore aspernatur, in aut placeat sequi
          eveniet, laboriosam illo sunt repellat numquam dolor ducimus
          asperiores{" "}
        </p>
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
             ref={ref}
          initial={{ opacity: 0, scale:0.8}}
          animate={inView ? { opacity: 1, scale:1 } : {}}
          transition={{
            delay:index*0.2,
            duration: 0.5,
          }}
              key={index}
              className="bg-[#1c1a2b] rounded-lg p-6 text-centershadow-lg  overflow-hidden hover:shadow-lg hover:shadow-purple-500 transform hover:scale-105   transition duration-300 ease-in-out"
            >
              <FaAppStore className="text-purple-500 text-4xl sm:twxt-5xl lg:text-6xl mb-4 mx-auto" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default service;
