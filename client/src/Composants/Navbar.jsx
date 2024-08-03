import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import logo from '../images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="text-white shadow-lg relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex-shrink-0">
                                <Link to="/" className="text-xl text-[#358F80] font-bold">
                                    <img className="h-16 w-16" src={logo} alt="Logo" />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4 font-body">
                                    {isHomePage ? (
                                        <>
                                            <Link
                                                to="/"
                                                className="bg-[#99E2B4] hover:bg-[#469D89] px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Accueil
                                            </Link>
                                            <a
                                                href="#parcours"
                                                className="bg-[#99E2B4] hover:bg-[#469D89] px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Parcours
                                            </a>
                                            <a
                                                href="#competences"
                                                className="bg-[#99E2B4] hover:bg-[#469D89] px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Compétences
                                            </a>
                                            <a
                                                href="#projets"
                                                className="bg-[#99E2B4] hover:bg-[#469D89] px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Projets
                                            </a>
                                            <a
                                                href="#contact"
                                                className="bg-[#99E2B4] hover:bg-[#469D89] px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Contact
                                            </a>
                                        </>
                                    ) : (
                                        <Link
                                            to="/"
                                            className="bg-[#99E2B4] hover:bg-[#469D89] px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Accueil
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="bg-[#99E2B4] p-2 rounded"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Ouvrir le menu</span>
                                {!isOpen ? (
                                    <IoMdMenu />
                                ) : (
                                    <IoCloseSharp />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`${isOpen ? "block" : "hidden"
                        } md:hidden h-screen flex justify-center items-center`}
                    id="mobile-menu"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-[#99E2B4]">
                        <Link
                            to="/"
                            className="block px-5 py-2 rounded-md text-xl font-medium"
                            onClick={toggleMenu}
                        >
                            Accueil
                        </Link>
                        {isHomePage && (
                            <>
                                <a
                                    href="#parcours"
                                    className="block px-5 py-2 rounded-md text-xl font-medium"
                                    onClick={toggleMenu}
                                >
                                    Parcours
                                </a>
                                <a
                                    href="#competences"
                                    className="block px-5 py-2 rounded-md text-xl font-medium"
                                    onClick={toggleMenu}
                                >
                                    Compétences
                                </a>
                                <a
                                    href="#projets"
                                    className="block px-5 py-2 rounded-md text-xl font-medium"
                                    onClick={toggleMenu}
                                >
                                    Projets
                                </a>
                                <a
                                    href="#contact"
                                    className="block px-5 py-2 rounded-md text-xl font-medium"
                                    onClick={toggleMenu}
                                >
                                    Contact
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
