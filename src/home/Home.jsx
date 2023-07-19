import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';
import smiley from './img/Smiley.png';
import loanify from './img/Loanify.png';
import xoxo from './img/Xoxo.png';
import starwars from './img/Starwars.png';
import html from './img/Html.png';
import css from './img/css.png';
import js from './img/JavaScript-logo.png';
import git from './img/Git-Icon.png';
import github from './img/GitHub2.png';
import command from './img/command-line.jpg';
import reactlogo from './img/react logo.png';
import vscode from './img/vscode.png';
import mui from './img/mui.png';
import bootstrap from './img/Boostrap.png';
import netlify from './img/netlify.png';
import vercel from './img/vercel.png';
import responsive from './img/responsive.png';
import ButtomNav from '../buttomnav/ButtomNav';
import Nav from '../nav/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div className='details'>
        <div className='name'>
            <p>ADEGOKE OYINDAMOLA</p>
            <h1>Front End Developer</h1>
        </div>
        <div>
            <p className='description'>I build visually stunning and interactive websites, and I love what I do.</p>
            <p data-aos="slide-down">↓ Scroll</p>
        </div>
        <Nav/>
        <div className='about' data-aos="fade-down">
            <div className='intro'>
          <h2>Hello, I'm Adegoke Oyindamola</h2><img src={smiley} alt='smiley' style={{width:'37px', height:'37px'}}/>
          </div>
          <p>I am a Front End Developer from Nigeria.</p>
          <p>I have been involved in website development since 2022, focusing on creating visually impressive and interactive websites.</p>
          <p>With a strong foundation in HTML, CSS, and JavaScript, I bring websites to life by seamlessly blending design and functionality.</p>
          <p>Always eager to learn and grow, I stay up-to-date with the latest frontend trends and emerging technologies. I constantly seek opportunities to expand my skillset and embrace challenges that push the boundaries of my creativity and technical capabilities.</p>
          <div className='more-about' >
            <Link to='/about'><button className='about-btn' data-aos="fade-up">MORE ABOUT ME</button></Link>
          </div>
        </div>
        <div className='project'>
            <div data-aos="fade-down">
            <h2>Featured Projects</h2><img/>
            <p className='featured-p'>I actively participate in personal projects, as well as assignments from my training school (Stutern), deriving immense satisfaction and enrichment from these experiences. Below is a compilation of my recent endeavors:</p>
            </div>
            <div className='loanify'>
                <div data-aos="fade-right"><img src={loanify} alt='loanify' style={{width:'500px', height:'270px'}}/></div>
                <div className='about-loanify' data-aos="fade-left">
                  <h3>LOANIFY</h3>
                  <p>Loanify is a web application that streamlines the management, monitoring, and risk assessment of various loan types. My team mates at Stutern and I developed this application, aiming to simplify the loan process.</p>
                  <ul>
                    <li>REACTJS</li>
                    <li>CSS</li>
                    <li>MATERIAL UI</li>
                  </ul>
                  <div className='loanify-btn'>
                <a href='https://project-loanify-app.vercel.app/'><button className='view-site'>VIEW SITE</button></a>
                </div>
                </div>
            </div>

            <div className='xoxo'>
                
                <div className='about-loanify' data-aos="fade-right">
                  <h3>Xoxo</h3>
                  <p>Xoxo is a site you can discover and shop for a wide range of fashionable clothing items. With it's user-friendly interface and seamless shopping experience, Xoxo makes it easy to discover and purchase the latest trends and wardrobe essentials.</p>
                  <ul>
                    <li>REACTJS</li>
                    <li>CSS</li>
                    <li>MATERIAL UI</li>
                  </ul>
                  <div className='loanify-btn'>
                 <a href='https://clothing-brand-wine.vercel.app/'><button className='view-site'>VIEW SITE</button></a>
                </div>
                </div>
                <div data-aos="fade-left"><img src={xoxo} alt='loanify' style={{width:'500px', height:'270px'}}/></div>
            </div>

            <div className='starwars'>
                <div data-aos="fade-right"><img src={starwars} alt='loanify' style={{width:'500px', height:'270px'}}/></div>
                <div className='about-loanify' data-aos="fade-left">
                  <h3>STARWARS</h3>
                  <p>The Star Wars Site is an interactive platform meticulously built with React and powered by data fetched from an API. With it's engaging user interface and real-time data retrieval, this Star Wars app provides an exciting and informative experience for all fans of the legendary saga.</p>
                  <ul>
                    <li>REACTJS</li>
                    <li>CSS</li>
                    <li>MATERIAL UI</li>
                  </ul>
                  <div className='loanify-btn'>
                 <a href='https://star-wars-movie.vercel.app/'><button className='view-site'>VIEW SITE</button></a>
                </div>
                </div>
            </div>
         
         <div className='view-all-btn'>
            <Link to='/projects'><button className='view-projects' data-aos="fade-up">VIEW ALL PROJECTS</button></Link>
         </div>

        </div>
      
      <div className='resume'>
        <div data-aos="fade-down">
            <h2>Resume</h2><img/>
        </div>
        <div className='resume-info'>
            <p>Currently, I am engaged in personal projects to enhance and refine my skills as a frontend developer.</p>
            <p>I am actively pursuing an internship opportunity within a cross-functional team at a medium to large size company. It is essential for me to join an organization that provides a clear career path and promotes personal growth. I am particularly interested in projects that focus on creating visually appealing aesthetics and implementing responsive design, which aligns perfectly with my interests and passions.</p>
        </div>
        <div className='skills'>
           <h3>Skills & Tools</h3>
           <div className='section-1' data-aos="zoom-in">
             <div>
                <img src={html} alt='html' style={{height:'70px', with:'70px'}}/>
                <p>HTML</p>
             </div>
             <div>
                <img src={css} alt='css' style={{height:'70px', with:'70px'}}/>
                <p>CSS</p>
             </div>
             <div>
                <img src={js} alt='js' style={{height:'70px', with:'70px'}}/>
                <p>JavaScript</p>
             </div>
             <div>
                <img src={git} alt='git' style={{height:'70px', with:'70px'}}/>
                <p>Git</p>
             </div>
             <div>
                <img src={github} alt='github' style={{height:'70px', with:'70px'}}/>
                <p>GitHub</p>
             </div>
             <div>
                <img src={command} alt='command' style={{height:'70px', with:'50px'}}/>
                <p>Command line</p>
             </div>
             <div>
                <img src={reactlogo} alt='react' style={{height:'70px', with:'70px'}}/>
                <p>React</p>
             </div>
           </div>
           <div className='section-2' data-aos="zoom-in">
             <div>
                <img src={vscode} alt='vscode' style={{height:'70px', with:'70px'}}/>
                <p>Vscode</p>
             </div>
             <div>
                <img src={mui} alt='mui' style={{height:'70px', with:'70px'}}/>
                <p>Material UI</p>
             </div>
             <div>
                <img src={bootstrap} alt='bootstrap' style={{height:'70px', with:'70px'}}/>
                <p>Bootstrap</p>
             </div>
             <div>
                <img src={netlify} alt='netlify' style={{height:'70px', with:'70px'}}/>
                <p>Netlify</p>
             </div>
             <div>
                <img src={vercel} alt='vercel' style={{height:'70px', with:'70px'}}/>
                <p>Vercel</p>
             </div>
             <div>
                <img src={responsive} alt='responsive' style={{height:'70px', with:'70px'}}/>
                <p>Responsive Websites</p>
             </div>
           </div>
        </div>
        <div className='education'>
          <h3>Education</h3>
          <p><b>Federal University Of Technology, Minna, Nigeria.</b></p>
          <p>Bachelor Of Technology 2021, Food Science & Technology</p>
        </div>

       <div className='resume-btn'>
        <Link to='resume'><button className='view-all-resume' data-aos="fade-up">VIEW ALL RESUME</button></Link>
       </div>

      </div>
      <ButtomNav/>

    </div>
  )
}

export default Home