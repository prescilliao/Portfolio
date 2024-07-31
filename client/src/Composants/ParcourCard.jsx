import React from 'react'

function ParcourCard({ parcour }) {
    return (
        <>
            <a
                className=" bg-gradient-to-b from-[#99E2B4] to-[#469D89] rounded-xl p-8 drop-shadow-[0_25px_15px_rgba(0,0,0,0.15)] transition hover:ring-[#C9866F] hover:shadow-black-500/10"
                href="#"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                </svg>

                <h2 className="mt-4 text-xl font-medium text-white">{parcour.niveau}</h2>
                <h3 className='text-white'>{parcour.spécialité}</h3>

                <p className="mt-1 text-sm text-white">
                    {parcour.établissement},{" "}{parcour.ville}
                </p>
                <span className='text-white'  >{parcour.annéeObtention}</span>
            </a>
        </>
    )
}

export default ParcourCard