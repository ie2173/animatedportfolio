import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const contactMe = ['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const handleEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', ref.current.form, 'your-token')
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
            <form ref={refForm} onSubmit={handleEmail}>
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
                  <input type="submit" classname="flat-button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
