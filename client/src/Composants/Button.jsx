import React from 'react';
import { motion } from 'framer-motion';

const Button = () => {
    return (
        <div className="mt-12 text-center">
            <motion.a
                href="/CV082024_De_Oliveira_Prescillia.pdf"
                className="inline-block rounded ring ring-[#469D89] bg-[#99E2B4] hover:bg-[#469D89] px-12 py-3 text-sm font-medium text-white transition focus:outline-none font-body"
                whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 5, -5, 5, -5, 0],
                    transition: {
                        duration: 0.6,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'loop',
                    },
                }}
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                download  // Cela permettra de télécharger le fichier au lieu de l'ouvrir dans le navigateur
            >
                curiculum vitae
            </motion.a>
        </div>
    );
};

export default Button;
