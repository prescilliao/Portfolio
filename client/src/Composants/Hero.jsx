import React from 'react';
import { motion } from 'framer-motion';
import Moi from '../../public/images/Moi.png'

const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
};

const Hero = () => {
    return (
        <motion.div
            className="flex justify-center text-white items-center bg-[#99e2b4ac] shadow-lg"
            initial="visible"
            animate="visible"
            variants={heroVariants}
        >
            <motion.div
                className="hero-content flex-col lg:flex-row px-40 my-10"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <motion.img
                    src={Moi}
                    className="max-w-sm rounded-full shadow-2xl mask mask-circle"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                />
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <h1 className="text-5xl font-bold font-body">Prescillia De Oliveira</h1>
                    <p className="py-6  font-body font-medium text-2xl md:p-4 capitalize">
                        Intégration Web
                    </p>
                    {/* <button className="btn btn-primary ">Curiculum vitae</button> */}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Hero;
