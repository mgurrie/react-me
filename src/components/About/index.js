import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders' 

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
    <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                    />
                </h1>
                <p>
                    <h2> Me </h2>
                    I am very resiliant and hard working. I ...
                </p>
                <p>
                    <h2>Education</h2>
                    I grew up in CHarleston, SC graduating from Bishop England High School in 2020.
                    I then decided my future was at CLemson wich I am attending until May of 2024, graduating with a bachlor's 
                    degree in Computer Science. I then am continuing my studies in the master's program, graduating in May 2025.
                </p>
                <p>
                    <h2> Employment </h2>
                    Interning for NIWC...
                </p>
                <p>
                    <h2>Relevant Corsework Completed</h2>
                    2021
                    ....
                    2022
                    ....
                    2023
                    ....
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" /> 
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" /> 
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> 
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> 
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> 
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4B2" /> 
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman"/>
    </>
    )
}

export default About 