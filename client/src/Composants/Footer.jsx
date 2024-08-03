import React from 'react';
import { IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import logo from '../images/logo.png';

function Footer() {
    return (
        <div id='contact'>
            <footer className="bg-radial-gradient pb-12">
                <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 flex min-[320px]:flex-col sm:flex-row min-[320px]:gap-8 items-center justify-evenly">
                    <img className='h-20 w-20 rounded-full' src={logo} alt="Logo" />
                    <div className='flex-col'>
                        <p className="mx-auto  max-w-md text-center leading-relaxed font-semibold text-white">
                            Mes contacts
                        </p>
                        <ul className="mt-4 flex justify-center gap-6 md:gap-8">
                            <li>
                                <a
                                    href="mailto:oliveiraprescillia04@gmail.com"
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
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
