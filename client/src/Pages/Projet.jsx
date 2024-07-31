import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import Timeline from '../Composants/Timeline'
import { projets } from '../../DataProjet'

function Projet() {

    return (
        <>
            <div id='projets' className='w-full flex justify-center pt-20'>
                <h1 className="text-5xl mb-5 text-[#358F80] font-bold font-body">Projets </h1>
            </div>
            <VerticalTimeline lineColor='#67B99A' className='font-body'>
                {projets.map((projet, index) => (
                    <Timeline key={index} projet={projet} />
                ))}
            </VerticalTimeline >
        </>
    )
}

export default Projet