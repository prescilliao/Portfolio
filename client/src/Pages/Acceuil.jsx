import React from 'react'
import Hero from '../Composants/Hero'
import Parcours from './Parcours'
import Projet from './Projet'
import Competences from './Competences'

export default function Acceuil() {
    return (
        <div className='bg-white'>
            <Hero />
            <Parcours />
            <Competences />
            <Projet />
        </div>
    )
}
