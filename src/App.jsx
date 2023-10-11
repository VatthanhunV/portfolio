import telephone from "./assets/telephone.png";
import linkedin from "./assets/linkedin.png";
import lineChat from "./assets/lineChat.png";
import arrow1 from "./assets/Arrow1.png";
import vector from "./assets/Vector.png";
import line1 from "./assets/line1.jpg";
import gmail from "./assets/gmail.png";
import skill from "./assets/skill.png";
import code from "./assets/code.png";
import home from "./assets/home.png";
import cv from "./assets/cv.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="button">
          <a href="#about">About</a>
        </div>
        <div className="button">
          <a href="#skills">Skills</a>
        </div>
        <div className="button">
          <a href="#work">Work</a>
        </div>
        <div className="button">
          <a href="#contact">Contact</a>
        </div>
      </div>
      <img src={arrow1} className="arrow" alt="arrow1" id="about" />
      <div className="hello">Hello,</div>
      <h1 style={{ marginLeft: "50px" }}>
        I am <span style={{ color: "green" }}>Vatthanhun Vachirakuntecho</span>
      </h1>
      <div className="container mx-auto">
        <br />
        <h2>
          I possess extensive work experience in sales, marketing, taxi driving,
          computer technician, and lending. My unwavering passion and commitment
          to coding further enhance my skill set, making my diverse background a
          valuable asset.
        </h2>
      </div>
      <br />
      <img src={line1} className="line1" alt="line" />
      <br />
      <div className="icons">
        <a
          href="https://www.canva.com/design/DAFscYpGDfU/aOw9gFsFzZoQYn8v_7xtTw/edit?utm_content=DAFscYpGDfU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
        >
          <img src={cv} alt="cv" />
        </a>
        <a href="https://www.linkedin.com/in/vatthanhun" target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/VatthanhunV" target="_blank">
          <img src={code} alt="code" />
        </a>

        <a href="https://line.me/ti/p/dmPtOaiZb2" target="_blank">
          <img src={lineChat} alt="lineChat" />
        </a>
      </div>
      <br />
      <br />
      <br />
      <p className="cer">CodeCademy Certificate</p>
      <img src={vector} alt="vector" className="vector" />
      <div className="container mx-auto">
        <h2>Learn Intermediate JavaScript Course</h2>
        <h2>Learn MongoDB Course</h2>
        <h2>Learn Node.js Course</h2>
        <h2>Learn React Course</h2>
        <h2>Build a Website with HTML, CSS, and GitHub Pages Skill Path</h2>
        <h2>Building Interactive JavaScript Websites Course</h2>
        <h2>Code Foundations Skill Path</h2>
        <h2>Learn CSS: Flexbox and Grid Course</h2>
        <h2>Learn CSS: Responsive Design Course</h2>
        <h2>Learn Git & GitHub Course</h2>
        <h2>Learn How to Code Course</h2>
        <h2>Learn JavaScript Course</h2>
        <h2>Learn JavaScript: Asynchronous Programming Course</h2>
        <h2>Learn JavaScript: Fundamentals Course</h2>
        <h2>Learn the Command Line Course</h2>
        <h2>Learn CSS Course</h2>
        <h2>Learn HTML Course</h2>
        <h2>Learn SQL Course</h2>
      </div>
      <p className="skills" id="skills">
        SKILLS
      </p>
      <div className="inskills">
        <h2>HTML</h2>
        <h2>CSS</h2>
        <h2>GIT</h2>
        <h2>JavaScript</h2>
        <h2>React</h2>
        <h2>NodeJS</h2>
        <h2>Express</h2>
        <h2>MongoDB</h2>
      </div>
      <p className="cer" id="work">
        Work Experience
      </p>
      <div className="container mx-auto">
        <h2>IT Officer</h2>
        <h2>Plastic Omnium Auto Inergy (Thailand) Co.,Ltd.</h2>
        <h2>Aug 2019 - Jan 2021 (1 yr 6 mos.)</h2>
        <h3>
          - conducted troubleshooting for computer, printer, and CC camera
          systems
        </h3>
        <h3>- performed weekly data backups</h3>
        <h3>
          - ensured system integrity by installing Windows 10 and Linux Ubuntu
        </h3>
        <br />
        <h2>Taxi Driver</h2>
        <h2>Grab Taxi (Thailand) Co., Ltd.</h2>
        <h2>July 2016 - April 2018 (1 yr 10 mos.)</h2>
        <h3>
          - served as a taxi driver, with approximately 50% of my passengers
          being foreigners
        </h3>
        <br />
        <h2>Marketing Coordinator</h2>
        <h2>SP Waste Management Co., Ltd.</h2>
        <h2>May 2013 - June 2015 (2 yr 2 mos.)</h2>
        <h3>- engaged in customer outreach</h3>
        <h3>
          - acted as a broker, facilitating the recycling of water and waste for
          factories located in Chonburi and Rayong
        </h3>
        <br />
        <h2>Car Marketing Representative</h2>
        <h2>TISCO Bank Public Company Limited</h2>
        <h2>May 2006 - June 2011 (5 yr 2 mos.)</h2>
        <h3>
          - liaised actively with car dealers and sales representatives to
          gather necessary documents for loan applications from car leasing
        </h3>
        <h3>
          - delivered subsequently related documents to the manager for approval
        </h3>
      </div>
      <p className="contact" id="contact">
        Contact
      </p>
      <div className="contactIcons ">
        <div className="imgContact">
          <img src={telephone} alt="telephone" className='img'/>
          <h2>+66 63 516 2896</h2>
        </div><br />
        <div className="imgContact">
          <img src={gmail} alt="gmail" className='img'/>
          <h2>vatthanhun@gmail.com</h2>
        </div><br />
        <div className="imgContact">
          <img src={home} alt="home" className='img'/>
          <h2>San-Sook Sub-Distric, Muang Chonburi, Chonburi 23030</h2>
        </div>
      </div>
    </>
  );
}

export default App;
