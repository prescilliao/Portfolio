import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="#f8fafc text-[#AE5E45]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center justify-between  w-full">
                            <div className="flex-shrink-0">
                                <Link to="/" className="text-xl font-bold">
                                    Prescillia.O
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4 font-body">
                                    <Link
                                        to="/"
                                        className="bg-[#F0E0D0] hover:bg-[#AE5E45] hover:text-[#F0E0D0] px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Acceuil
                                    </Link>
                                    <a
                                        href="/about"
                                        className="bg-[#F0E0D0] hover:bg-[#AE5E45] hover:text-[#F0E0D0] px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Parcours
                                    </a>
                                    <a
                                        href="/services"
                                        className="bg-[#F0E0D0] hover:bg-[#AE5E45] hover:text-[#F0E0D0] px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Projets
                                    </a>
                                    <a
                                        href="/contact"
                                        className="bg-[#F0E0D0] hover:bg-[#AE5E45] hover:text-[#F0E0D0] px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="bg-[#F0E0D0] p-2 rounded"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Ouvrir le menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
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
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="/"
                            className=" block px-5 py-2 rounded-md text-xl font-medium "
                        >
                            Acceuil
                        </a>
                        <a
                            href="/about"
                            className=" block px-5 py-2 rounded-md text-xl font-medium"
                        >
                            Parcours
                        </a>
                        <a
                            href="/services"
                            className="block px-5 py-2 rounded-md text-xl font-medium"
                        >
                            Projets
                        </a>
                        <a
                            href="/contact"
                            className="block px-5 py-2 rounded-md text-xl font-medium"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
