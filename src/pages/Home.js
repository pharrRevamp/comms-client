import React from 'react'

function Home (){
  return (
    <div className="home">
        <div className='homeBanner'>
          <img src="" alt="banner"/>
        </div>        
        <div className='missionStatement'>
            <h2>Mission Statement</h2>
            <p>The mission of The City of Pharr's Public Safety Communications Department is to protect, serve and educate. 
                We accomplish this through the delivery of comprehensive and integrated safety, security and emergency response to the community we serve.
                “9-1-1, What's the address of the emergency?” Public Safety Communication (PSC) is the answering point of all 9-1-1 and non-emergency Police / Fire / 
                Emergency Medical Service calls made within the City of Pharr. Well-trained Telecommunicators serve Pharr and its partner agencies 24/7 as the first point 
                of help in an emergency. The team is committed to excellence with every call. More than 200, 000 calls for help are answered each year which is over 400 per
                 day.</p>
        </div>
        <div className='directorsNote'>
            <h2>Director's Note</h2>
            <p>Welcome to the Pharr Public Safety Communications Department's official website. I hope that no matter what your interest is in our site you find this 
                as an informative resource. PSC is under direct control of the Communications Director which reports to the Public Safety Communications Advisory Board. 
                The area serviced by PSC is growing and we are working to stay ahead of that growth and provide professional communications services to the citizens and 
                our member agencies. Please feel free to contact me if you have any questions about Pharr Public Safety Emergency Communications.
                Thank you for visiting our website,
                - Kenneth Ennis
                Communications Director</p>
        </div>
    </div>
  )
}

export default Home;