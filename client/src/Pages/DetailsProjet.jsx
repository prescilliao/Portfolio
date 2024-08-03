import React from 'react'
import { FaGithub } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { projets } from '../../DataProjet'
import Technologie from '../Composants/Technologie';



function DetailsProjet() {
    const { id } = useParams()
    const filtre = projets.filter((projet) =>
        projet.id == id
    )

    return (
        <>
            <div className="hero bg-white min-[230px]:py-12 min-[320px]:px-4 lg:p-24">
                <section>
                    <div className="mx-auto rounded-[15px] max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 shadow-[5px_5px_10px_#82c099,-5px_-5px_10px_#b0ffcf]">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-14">
                            <div className="relative p-3 rounded-lg shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2);] overflow-hidden sm:h-auto lg:order-last lg:h-full ">
                                <img className='lg:h-[650px] bg-covermin-[320px]:h-full sm:w-full' alt="" src={filtre[0].image} />
                            </div>

                            <div className="bg-[#99E2B4] h-full px-6 lg:py-12 rounded-lg flex flex-col items-center gap-20">
                                <div className='flex flex-col items-center'>

                                    <h2 className="text-3xl font-bold sm:text-4xl text-white flex min-[320px]:pt-14 lg:pt-0">
                                        {filtre[0].name}
                                    </h2>
                                    <p className="font-semibold text-white mt-10">
                                        {filtre[0].description}
                                    </p>
                                </div>
                                <div className='flex flex-col text-justify'>
                                    <p className=" text-white">
                                        {filtre[0].details}
                                    </p>
                                    <div className="mt-12 text-white">
                                        {filtre[0].logiciel.map((pro, index) => (
                                            <Technologie key={index} pro={pro} />
                                        ))}
                                    </div>
                                </div>

                                {filtre[0].id != 1 && <a
                                    target='blank'
                                    href={filtre[0].github}
                                    className="rounded flex justify-center items-center shadow-[inset_5px_5px_10px_#82c099,inset_-5px_-5px_10px_#b0ffcf] px-12 py-3 text-sm font-medium text-white transition min-[320px]:mb-10 min-[320px]:mt-6 lg:mt-24 lg:mb-0"
                                >
                                    Voir le code <FaGithub className="w-6 text-xl ml-4" />
                                </a>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default DetailsProjet