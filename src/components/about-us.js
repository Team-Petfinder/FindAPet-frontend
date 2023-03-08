import React from "react";
import { Container } from "react-bootstrap";
import "../style/aboutus.css"
import Susi1 from '../images/Susi1.png'
import Araceli from '../images/Araceli-profile.png'
import Anthony from '../images/Anthony-profile.png'
import Cats from '../images/Anthony-cats.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


class AboutUs extends React.Component {
  render() {
    return (
      <body>
        <Container className="coantainer">
          <div className="profile-area">
            <div className="elements">
              <div className="card">
                <div className="img1"> <img src={Susi1} alt="" /> </div>
                <div className="img2"><img src={Araceli} alt="" /> </div>
                <div className="biography">
                  <h2 className="profileName">CASEY GLIDEWELL</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="socials">
                <a href="https://www.linkedin.com/in/araceli-garcia-martinez/"><LinkedInIcon/></a>
                <a href="https://github.com/Araceligm90"><GitHubIcon/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-area">
            <div className="container">
              <div className="card">
                <div className="img1"> <img src={Cats} alt="" /> </div>
                <div className="img2"><img src={Anthony} alt="" /> </div>
                <div className="biography">
                  <h2 className="profileName">ANTHONY LOPEZ</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="socials">
                <a href="https://www.linkedin.com/in/antalopez/"><LinkedInIcon/></a>
                <a href="https://github.com/Ostyantic"><GitHubIcon/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-area">
            <div className="container">
              <div className="card">
                <div className="img1"> <img src={Susi1} alt="" /> </div>
                <div className="img2"><img src={Araceli} alt="" /> </div>
                <div className="biography">
                  <h2 className="profileName">ARACELI GARCÍA</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="socials">
                <a href="https://www.linkedin.com/in/araceli-garcia-martinez/"><LinkedInIcon/></a>
                <a href="https://github.com/Araceligm90"><GitHubIcon/></a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </body>
    )
  }
}

export default AboutUs;