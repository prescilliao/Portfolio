import React from 'react'
import ParcourCard from '../Composants/ParcourCard'
import Button from '../Composants/Button'
import DataParcours from '../../DataParcours'

function Parcours() {
    return (
        <div id='parcours'>
            <section className="bg-white-100 font-body h-max bg-white min-[320px]:py-8 sm:py-10 md:py-14">
                <div className="flex justify-evenly flex-col lg:px-8 lg:py-16 mx-auto max-w-screen-xl">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-5xl mb-5 text-[#358F80] font-bold ">Parcours </h2>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {DataParcours.map((parcour, index) => (
                            < ParcourCard key={index} parcour={parcour} />
                        ))}
                    </div>

                    <Button />

                </div>
            </section>
        </div>
    )
}

export default Parcours
