import React, {useEffect} from 'react';
import ButtomNav from '../buttomnav/ButtomNav';
import Nav from '../nav/Nav';
import '../resume/Resume.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='resume-div'>
        <Nav/>
        <div className='my-resume' data-aos="fade-down">
        <div>
            <h2>Resume</h2><img/>
        </div>
        <div className='resume-info'>
            <p>Currently, I am engaged in personal projects to enhance and refine my skills as a frontend developer.</p>
            <p>I am actively pursuing an internship opportunity within a cross-functional team at a medium to large size company. It is essential for me to join an organization that provides a clear career path and promotes personal growth. I am particularly interested in projects that focus on creating visually appealing aesthetics and implementing responsive design, which aligns perfectly with my interests and passions.</p>
        </div>
        <div className="resume-skills">
          <h3>Skills</h3>
          <div className="skill-list">
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Netlify</li>
                <li>Vercel</li>
            </ul>
            <ul>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Effective Communication</li>
            </ul>
          </div>
        </div>
        <div className='work-experience'>
          <h3>Work Experience</h3>
          <div className='work-exp-div'>
            <div>
            <p className='role'>ICT Officer</p>
            <p>National Park Service, Headquarters</p>
            <ul>
              <li>Communicate, resolve and initiate the resolution of problems and concerns for the department</li>
              <li>Maintain existing software functionalities and products</li>
            </ul>
            </div>
            <div>
              <p>2021-2022</p>
              <p>Abuja, NG</p>
            </div>
          </div>
          <div className='work-exp'>
            <div>
            <p className='role'>Social Media Manager</p>
            <p>Code Learn Grow</p>
            <ul>
                <li>Communicate with followers, respond to queries in a timely manner and monitor reviews</li>
                <li>Oversee social media accounts’ design (profile pictures and blog layout)</li>
              </ul>
            </div>
            <div>
              <p>2022- Present</p>
              <p>Abuja, NG</p>
            </div>
          </div>
        </div>
          <div className='download-div'>
            <a href='https://drive.google.com/file/d/17qDDk-IMZ_mCSoer81gWXIG0wHyeRHqE/view?usp=drive_link'><button className='download-btn' data-aos="fade-up">DOWNLOAD MY RESUME</button></a>
            </div>
        </div>
        <ButtomNav/>
    </div>
  )
}

export default Resume