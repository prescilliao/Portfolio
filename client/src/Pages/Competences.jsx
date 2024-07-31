import { useState } from "react";
import { motion } from "framer-motion";
import figma from "../../public/images/figma.png";
import vscode from "../../public/images/vscode.png";
import github from "../../public/images/github.png";
import html from "../../public/images/html.png";
import css from "../../public/images/css.png";
import sass from "../../public/images/sass.png";
import js from "../../public/images/js.png";
import react from "../../public/images/react.png";
import feedly from "../../public/images/feedly.png";
import redux from "../../public/images/redux.png";
import tailwind from "../../public/images/tailwind.png";

const Competences = () => {
    const [positionIndexes, setPositionIndexes] = useState([
        0, 1, 2, 3, 4,
    ]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % 5
            );
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
            );

            return updatedIndexes;
        });
    };

    const images = [
        figma,
        vscode,
        github,
        html,
        css,
        sass,
        js,
        react,
        feedly,
        redux,
        tailwind,
    ];

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.7, zIndex: 3 },
        left: { x: "-90%", scale: 0.5, zIndex: 2 },
        right: { x: "90%", scale: 0.5, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };
    return (
        <div id="competences" className="flex items-center flex-col justify-center bg-[#78C6A3] h-1/2 py-8">
            <h1 className="text-5xl mb-5 text-white font-bold font-body">Compétences </h1>
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    src={image}
                    alt={image}
                    className="rounded-[12px] h-60 bg-cover"
                    initial="center"
                    animate={positions[positionIndexes[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    style={{ width: "30%", position: "absolute" }}
                />
            ))}
            <div className="flex flex-row gap-3">
                <button
                    className="text-white mt-[400px] bg-[#036666] hover:bg-white hover:text-[#036666] rounded-md py-2 px-4"
                    onClick={handleBack}
                >
                    Back
                </button>
                <button
                    className="text-white mt-[400px] bg-[#036666] hover:bg-white hover:text-[#036666]  rounded-md py-2 px-4"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Competences;
