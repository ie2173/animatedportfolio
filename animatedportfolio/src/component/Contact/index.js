import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

const Contact = () => {
  const contactMe = ['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_39cur5n',
        'template_4l9uuxn',
        refForm.current,
        '71RLGo3-0Q1rR1qil'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactMe}
              idx={15}
            />
          </h1>
          <p>
            I am interested in participating in building out web3 Dapps. If you
            are interested in hiring me for freelance projects. Please feel free
            to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Ian Elliott,
          <br />
          California, USA,
          <br />
          1500 Warburton Ave,
          <br />
          Santa Clara, CA 95050
          <br />
          <span>ie2173@columbia.edu</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[37.354107, -121.955238]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[37.354107, -121.955238]} />
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
