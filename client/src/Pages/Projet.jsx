import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import Timeline from '../Composants/Timeline'
import { projets } from '../../DataProjet'

function Projet() {

    return (
        <>
            <div className='w-full flex justify-center pt-20'>
                <h1 className="text-5xl mb-10 text-[#AE5E45] font-bold font-body">Projets</h1>
            </div>
            <VerticalTimeline lineColor='#E7CEB9' className='font-body'>
                {projets.map((projet, index) => (
                    <Timeline key={index} projet={projet} />
                ))}
            </VerticalTimeline >
        </>
    )
}

export default Projet