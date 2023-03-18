import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import "./About.css";

const About = () => {
  return (
    <>
    <div className="container">
         <div className="member">
            <div className="member-img">
          <img src="/pics/Ab.jpg" alt=""  />
          </div>
          <div className="member-info">
            <h3>Abhishek Anand</h3>
             <p>✉ : abhishek200097@gmail.com</p>
             <p><InstagramIcon fontSize='small'/> : ig_abhishek.27</p>
             <p>Role : Web Developer</p>
             </div>
             </div>
             <div className="member">
            <div className="member-img">
          <img src="/pics/Ar.jpg" alt=""  />
          </div>
          <div className="member-info">
            <h3>Arjun</h3>
             <p>✉ : arjunkumar100905@gmail.com</p>
             <p><InstagramIcon fontSize='small'/> : thisisarjunsaini_2005</p>
             <p>Role : Web Developer</p>
             </div>
             </div>
             <div className="member">
            <div className="member-img">
          <img src="/pics/Ad.jpg" alt=""  />
          </div>
          <div className="member-info">
            <h3>Aditya Singh</h3>
             <p>✉ : as2033278@gmail.com</p>
             <p><InstagramIcon fontSize='small'/> : adisingh9086</p>
             <p>Role : Web Developer</p>
             </div>
             </div>
        </div>
        <div className="thanks">
            <p>Thank You for visiting !</p>
        </div>
       
      </>
  )
}

export default About
