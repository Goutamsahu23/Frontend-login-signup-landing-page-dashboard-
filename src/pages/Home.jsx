import React from 'react'
import img1 from '../assets/Rectangle 39.png'
import img3 from '../assets/Rectangle 40.png'

import img2 from '../assets/Rectangle 41.png'

import img4 from '../assets/Rectangle 46.png'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import Footer from '../components/Footer'
import { FaRegHeart } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoSaveOutline } from "react-icons/io5";
import { TbBurger } from "react-icons/tb";
const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};



const Home = () => {
    return (
        <>
                <div className='container'>
            <div className='container_top'>
                <div className='container_top_right'>

                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Lorem ipsum dolor sit amet',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'We produce food for Hamsters',
                            2000,
                            'Lorem ipsum dolor, sit amet consectetur',
                            2000,
                            'We produce food for Chinchillas',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam quo labore laborum et, error sed. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam explicabo dignissimos voluptate repellendus deleniti quia molestiae obcaecati impedit,
                        cumque laboriosam!
                    </p>
                    <Link to='/signup'>

                        <button className='btn'>Get Started</button>
                    </Link>

                </div>
                <div className='container_top_left'>
                    <div className='right'>
                        <div className='mydiv'>
                            <motion.div
                                className='icon_div'
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                            >
                                <FaRegHeart  size={30} style={{margin:'10px' }}/>
                            </motion.div>
                            <div>
                                <span>168</span><br />
                                <span>Lorem ipsum dolor sit amet.</span>
                            </div>
                        </div>

                        <div className='mydiv'>
                        <motion.div
                                className='icon_div'
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                            >
                                <FaRegFile  size={30} style={{margin:'10px' }}/>
                            </motion.div>
                            <div>
                                <span>168</span><br />
                                <span>Lorem ipsum dolor sit amet.</span>
                            </div>
                        </div>

                        <div className='mydiv'>
                            <motion.div
                                className='icon_div'
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                            >
                                <FaRegStar  size={30} style={{margin:'10px' }}/>
                            </motion.div>
                            <div>
                                <span>168</span><br />
                                <span>Lorem ipsum dolor sit amet.</span>
                            </div>
                        </div>

                    </div>
                    <div className='left'>
                        <div className='mydiv'>
                            <motion.div
                                className='icon_div'
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                            >
                                <TbBurger  size={30} style={{margin:'10px' }}/>
                            </motion.div>
                            <div>
                                <span>168</span><br />
                                <span>Lorem ipsum dolor sit amet.</span>
                            </div>
                        </div>


                        <div className='mydiv'>
                        <motion.div
                                className='icon_div'
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                            >
                                <IoSaveOutline  size={30} style={{margin:'10px' }}/>
                            </motion.div>
                            <div>
                                <span>168</span><br />
                                <span>Lorem ipsum dolor sit amet.</span>
                            </div>
                        </div>

                        <div className='mydiv'>
                        <motion.div
                                className='icon_div'
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                            >
                                <FaRegClock  size={30} style={{margin:'10px' }}/>
                            </motion.div>
                            <div>
                                <span>168</span><br />
                                <span>Lorem ipsum dolor sit amet.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                className='container_bottom'
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="banner" variants={item}>
                    <img src={img1} alt='banner1' height={'200px'} width={'100%'} />
                </motion.div>
                <motion.div className="banner" variants={item}>
                    <img src={img2} alt='banner1' height={'200px'} width={'100%'} />
                </motion.div>
                <motion.div className="banner" variants={item}>
                    <img src={img3} alt='banner1' height={'200px'} width={'100%'} />
                </motion.div>
                <motion.div className="banner" variants={item}>
                    <img src={img4} alt='banner1' height={'200px'} width={'100%'} />
                </motion.div>
            </motion.div>




        </div>
        <Footer/>

        </>

    )
}

export default Home
