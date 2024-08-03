import React from 'react';
import Slidecompet from '../Composants/Slidecompet';
import figma from '../images/figma.png';
import vscode from '../images/vscode.png';
import github from '../images/github.png';
import html from '../images/html.png';
import css from '../images/css.png';
import sass from '../images/sass.png';
import js from '../images/js.png';
import react from '../images/react.png';
import feedly from '../images/feedly.png';
import redux from '../images/redux.png';
import tailwind from '../images/tailwind.png';

const images = [
    {
        image: figma,
        titre: "Figma"
    },
    {
        image: vscode,
        titre: "VS code"
    },
    {
        image: github,
        titre: "GitHub"
    },
    {
        image: html,
        titre: "HTML"
    },
    {
        image: css,
        titre: "CSS"
    },
    {
        image: sass,
        titre: "Sass"
    },
    {
        image: js,
        titre: "JavaScript"
    },
    {
        image: react,
        titre: "React"
    },
    {
        image: feedly,
        titre: "Feedly"
    },
    {
        image: redux,
        titre: "Redux"
    },
    {
        image: tailwind,
        titre: "TailWind"
    }

];

const Competences = () => {
    return (
        <div id="competences">
            <div className="flex items-start flex-col justify-center bg-[#78C6A3] py-8 overflow-hidden">
                <h1 className="text-5xl mb-5 m-auto py-6 text-white font-bold font-body">Compétences</h1>
                <div className="w-full px-6 mb-14 mt-5">
                    <Slidecompet images={images} />
                </div>
            </div>
        </div>
    );
};

export default Competences;
