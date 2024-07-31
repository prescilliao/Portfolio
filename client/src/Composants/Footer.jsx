import React from 'react';
import { IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

function Footer() {
    return (
        <div id='contact'>
            <footer className="bg-radial-gradient">
                <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
                    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed font-semibold text-white">
                        Mes contacts
                    </p>
                    <ul className="mt-4 flex justify-center gap-6 md:gap-8">
                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition hover:text-gray-700/75"
                            >
                                <span className="sr-only">Mail</span>
                                <IoIosMail className='text-2xl' />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/prescillia-de-oliveira/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition hover:text-gray-700/75"
                            >
                                <span className="sr-only">Linkedin</span>
                                <IoLogoLinkedin className='text-2xl' />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://github.com/prescilliao"
                                rel="noreferrer"
                                target="_blank"
                                className="text-white transition hover:text-gray-700/75"
                            >
                                <span className="sr-only">GitHub</span>
                                <IoLogoGithub className='text-2xl' />
                            </a>
                        </li>
                    </ul>
                    {/* <ul className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <li>
                            <a
                                className="text-white transition hover:text-gray-700/75"
                                href="/" // Lien vers la page d'accueil
                            >
                                Accueil
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-white transition hover:text-gray-700/75"
                                href="/#parcours" // Lien vers une ancre sur la page d'accueil
                            >
                                Parcours
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-white transition hover:text-gray-700/75"
                                href="/#competences" // Lien vers une ancre sur la page d'accueil
                            >
                                Compétences
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-white transition hover:text-gray-700/75"
                                href="/#projets" // Lien vers une ancre sur la page d'accueil
                            >
                                Projets
                            </a>
                        </li>
                    </ul> */}
                </div>
            </footer>
        </div>
    );
}

export default Footer;
