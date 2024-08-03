import React from 'react'
import { IoSchoolOutline } from "react-icons/io5";

function ParcourCard({ parcour }) {
    return (
        <>
            <a
                className=" bg-gradient-to-b from-[#99E2B4] to-[#469D89] rounded-xl p-8 drop-shadow-[0_25px_15px_rgba(0,0,0,0.15)] transition hover:shadow-black-500/10"
                href="#"
            >
                <IoSchoolOutline className='text-white text-3xl' />

                <h2 className="mt-4 text-xl font-semibold text-white">{parcour.niveau}</h2>
                <h3 className='text-white font-medium'>{parcour.spécialité}</h3>

                <p className="mt-1 text-sm font-thin text-white">
                    {parcour.établissement},{" "}{parcour.ville}
                </p>
                <span className='text-white'>{parcour.annéeObtention}</span>
            </a>
        </>
    )
}

export default ParcourCard