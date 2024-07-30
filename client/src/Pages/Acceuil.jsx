import React from 'react'
import Hero from '../Composants/Hero'
import Parcours from './Parcours'
import Projet from './Projet'

export default function Acceuil() {
    return (
        <div className='bg-[#f0e0d04a]'>
            <Hero />
            <Parcours />
            <Projet />
        </div>
    )
}
