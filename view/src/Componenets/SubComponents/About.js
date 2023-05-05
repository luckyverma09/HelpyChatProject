import React from 'react';
import '../../CSS/About.css';
import Header from "../Header";

const members = [
  {
    name: 'Piyush Upadhyay',
    role: 'Front End Developer',
    image: '/view/src/Assest/Piyush.jpg/150',
    bio: 'I am Piyush, I worked as a Front End developer in this project'
  },
  {
    name1: 'Lucky Verma',
    role1: 'Back End Developer',
    image1: 'https://via.placeholder.com/150',
    bio1: 'I am Lucky, I worked as a Back End developer in this project'
  },
  {
    name2: 'Ritika Singh',
    role2: 'Front End Developer',
    image2: 'https://via.placeholder.com/150',
    bio2: 'I am Ritika, I worked as a Front End developer in this project'
  }
];

function About() {
  const firstContainerMembers = members.filter(member => member.name === 'Piyush Upadhyay' || member.role === 'Front End Developer');
  const secondContainerMembers = members.filter(member => member.name1 === 'Lucky Verma' || member.role1 === 'Back End Developer');
  const thirdContainerMembers = members.filter(member => member.name2 === 'Ritika Singh' || member.role2 === 'Front End Developer');

  return (
    <>
      <Header />
      <div className="aboutpage">
      <img src='https://img.freepik.com/free-vector/technology-wire-mesh-network-connection-digital-background_1017-28407.jpg' alt="aboutus" />
        <div className="about-text">
          <h1><strong>About us</strong></h1> 
        </div>

        <div className="containeroddabout">
          {firstContainerMembers.map(member => (
            <div key={member.name} className="member-block">
              <div className="Piyush">
                <img className='piyushimg' src={require("../../Assest/Piyush.jpg")} alt={member.name} />
              </div>

              <h3>{member.name}</h3>
              <h5>{member.role}</h5>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="containerevenabout">
          {secondContainerMembers.map(member => (
            <div key={member.name1} className="member-blocks">
              <div className="Lucky">
              <img className='luckyimg' src={require("../../Assest/Lucky.jpg")} alt={member.name1} />
              </div>

              <div className='luckyinfo'><h3>{member.name1}</h3></div>
              <div className='luckyinfo'><h5>{member.role1}</h5></div>
              <div className='luckyinfo'><p>{member.bio1}</p></div>
            </div>
          ))}
        </div>

        <div className="containeroddabout">
          {thirdContainerMembers.map(member => (
            <div key={member.name2} className="member-block">
              <div className="Ritika">
              <img className='ritikaimg' src={require("../../Assest/Ritika.jpg")} alt={member.name} />
              </div>

              <h3>{member.name2}</h3>
              <h5>{member.role2}</h5>
              <p>{member.bio2}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;