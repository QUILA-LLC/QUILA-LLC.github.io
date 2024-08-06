import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/styles/AboutUs.css';
import backgroundImage from '../assets/images/Background.jpg';

const teamMembers = [
  {
    name: 'Member 1',
    title: 'Founder',
    image: backgroundImage,
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
    twitter: 'https://www.twitter.com',
  },
  {
    name: 'Member 2',
    title: 'Founder',
    image: backgroundImage,
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
    twitter: 'https://www.twitter.com',
  },
  {
    name: 'Member 3',
    title: 'Founder',
    image: backgroundImage,
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
    twitter: 'https://www.twitter.com',
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Navbar current="about" />
      <div className="about-us-container">
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>Welcome to the About Us page!</p>
          <p>Here you can find more information about our company.</p>
        </div>
        <div className="meet-team-content">
          <h1>Meet the Team</h1>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member-photo"
                />
                <h3>{member.name}</h3>
                <p>{member.title}</p>
                <div className="social-icons">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Instagram`}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Twitter`}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;