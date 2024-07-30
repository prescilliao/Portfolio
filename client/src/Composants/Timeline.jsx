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
                    background: '#C9866F', color: '#000'
                }}
                contentArrowStyle={{ borderRight: '7px solid  #C9866F' }}
                date={projet.date}
                iconStyle={{ background: '#C9866F', color: '#C9866F' }}
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