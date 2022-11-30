import React from 'react'
import progressSnapshot from "../images/2017-NG911-Progress-snapshot.jpg"

function NextGen() {
  return (
    <div className='nextGen'>
        <div className='nextGenBanner'>
            <img src="" alt="next-gen-banner" />
        </div>
        <div className='nextGenContent'>
            <h2>Next Generation 9-1-1 (NG 9-1-1)</h2>
            <p>Because most 911 systems were originally built using analog rather than digital technologies, public safety answering points (PSAPs)
            across the country need to be upgraded to a digital or Internet Protocol (IP)-based 911 system, commonly referred to as Next Generation 911 (NG911).</p>
            <p>The success and reliability of 911 will be greatly improved with the implementation of NG911, as it will enhance emergency number services to create a
            faster, more resilient system that allows voice, photos, videos and text messages to flow seamlessly from the public to the 911 network.</p>
            <p>NG911 will also improve PSAP ability to help manage call overload, natural disasters, and transferring of 911 calls and proper jurisdictional responses
            based on location tracking.</p>
            <p>While the technology to implement these new IP-based 911 systems is available now, the transition to NG911 will involve much more than just new computer
            hardware and software. Implementing NG911 in states and counties nationwide will require the coordination of a variety of emergency communication, public safety,
            legislative and governing entities.</p>
            <img src={progressSnapshot} alt="NG-Progress-Snapshot" />
        </div>
    </div>
  )
}

export default NextGen;