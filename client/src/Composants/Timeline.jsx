import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { useNavigate } from 'react-router-dom';

function Timeline({ projet }) {
    const navigate = useNavigate()
    return (
        <>

            <VerticalTimelineElement
                onTimelineElementClick={() =>
                    navigate(`/projet/${projet.id}`)
                }
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: '#67B99A', color: '#67B99A'
                }}
                contentArrowStyle={{ borderRight: '7px solid  #67B99A' }}
                date={projet.date}
                iconStyle={{ background: '#67B99A', color: '#67B99A' }}
                icon={<img className='rounded-full h-full bg-cover w-full' src={projet.image} />}

            >

                <h4 className="vertical-timeline-element-subtitle font-semibold text-white">{projet.name}</h4>
                <p className='text-white'>
                    {projet.description}
                </p>
            </VerticalTimelineElement >
        </>
    )
}

export default Timeline