import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

const Navbar = () => {
    const [menu, setmenu] = useState(false);

    const items = [
        { id: 1, text: "About", to: "about" },
        { id: 2, text: "Service", to: "service" },
        { id: 3, text: "Work", to: "work" },
        { id: 4, text: "Contact", to: "contact" },
    ];

    return (
        <div className="sticky top-0 z-50 bg-black/40 backdrop-blur-md">

            {/* Desktop Navbar */}
            <motion.div
             className="container mx-auto hidden md:flex justify-between items-center py-6">
                <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
                    <span className="text-white">iron</span>
                    <span className="text-purple-500">coding</span>
                </div>

                <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white">
                    {items.map(({ id, text,to }) => (
                        <li key={id}>
                            <Link to={to} smooth={true} duration={500} offset={-70}>
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>

                <a className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full">
                    DownloadCV
                </a>
            </motion.div>

            {/* Mobile Header */}
            <div className="md:hidden flex justify-between items-center px-6 py-4 text-white">
                <h2 className="text-xl font-bold">iron coding</h2>
                <div onClick={() => setmenu(!menu)}>
                    {menu ? <IoCloseSharp size={30} /> : <AiOutlineMenu size={30} />}
                </div>
            </div>

            {/* Fade Overlay (Background) */}
            {menu && (
                <div
                    onClick={() => setmenu(false)}
                    className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-20 transition-opacity duration-300"
                ></div>
            )}

            {/* Slide + Fade Sidebar */}
            <div
                className={`fixed top-0 left-0 w-2/3 h-screen bg-white text-black z-30 
                transform transition-all duration-300 ease-in-out
                ${menu
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0"
                    }`}
            >
                <ul className="mt-16 px-6 space-y-6 text-lg font-semibold">
                    {items.map(({ id, text,to }) => (
                        <li key={id}>
                            <Link to={to} smooth={true} duration={500} offset={-70}>
                                {text}
                            </Link>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
