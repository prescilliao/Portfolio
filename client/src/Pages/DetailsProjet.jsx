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
            <div className="hero bg-[#88D4AB] px-12 h-[calc(100vh-350px)]">
                <section>
                    <div className="mx-auto rounded-[15px] max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 shadow-[5px_5px_10px_#82c099,-5px_-5px_10px_#b0ffcf]">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative overflow-hidden sm:h-80 lg:order-last lg:h-full">
                                <img className='h-[650px] rounded-sm bg-cover ' alt="" src={filtre[0].image} />
                            </div>

                            <div className="lg:py-24">
                                <h2 className="text-3xl font-bold sm:text-4xl text-white">
                                    {filtre[0].name}
                                </h2>

                                <p className="mt-4 text-white">
                                    {filtre[0].description}
                                </p>
                                <p className="mt-4 text-white">
                                    {filtre[0].details}
                                </p>
                                <div className="mt-6 text-white">
                                    {filtre[0].logiciel.map((pro, index) => (
                                        <Technologie key={index} pro={pro} />
                                    ))}
                                </div>

                                {filtre[0].id != 1 && <a
                                    target='blank'
                                    href={filtre[0].github}
                                    className="mt-8 rounded flex justify-center items-center shadow-[inset_5px_5px_10px_#82c099,inset_-5px_-5px_10px_#b0ffcf] px-12 py-3 text-sm font-medium text-white transition"
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