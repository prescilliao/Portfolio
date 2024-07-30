import React from 'react'
import ParcourCard from '../Composants/ParcourCard'
import Button from '../Composants/Button'
import DataParcours from '../../DataParcours'

function Parcours() {
    return (
        <div>
            <section className="bg-white-100 font-body  bg-gradient-to-b from-[#F0E0D0] to-[#E7CEB9] ">
                <div className="flex justify-evenly flex-col lg:px-8 lg:py-16 mx-auto max-w-screen-xl h-[calc(100vh-598px)]">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-5xl mb-5 text-[#AE5E45] font-bold ">Parcours </h2>

                        {/* <p className="mt-4 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p> */}
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
