import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faEthereum,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', '!']}
              idx={15}
            />
          </h1>
          <p>
            My name is Ian and I am a Web3/ full stack blockchain developer. I
            am looking for opportunities to help build out now Dapps and
            infastructure to further advance the technology and capabilities of
            cryptocurrency or some shit.
          </p>
          <p>
            I have a background in finance and economics and have worked as an
            analyst for various companies. After years of investing and getting
            involved in the cryptocurrency community, I finally made the plunge
            to become a web3 developer in 2021.{' '}
          </p>
          <p>
            I am fluent in Solidity, Javascript/Typescript and python. I am well
            versed in React, web3.js, ethers.js, tailwind and styled components
            in the design of Dapps. Please hire me for all your blockchain
            needs.{' '}
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faEthereum} color="#3c3c3d" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#FFD43B" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
