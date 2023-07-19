import React, {useEffect} from 'react';
import ButtomNav from '../buttomnav/ButtomNav';
import Nav from '../nav/Nav';
import '../project/Project.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import loanify from './img/Loanify.png';
import starwars from './img/Starwars.png';
import xoxo from './img/Xoxo.png';
import todo from './img/Todo.png';
import instagram from './img/Instagram.png';
import netflix from './img/Netflix.png';
import perfume from './img/Perfume.png';
import portfolio from './img/Portfolio.png';
import profile from './img/Profile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}


const Project = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='project-div'>
        <Nav/>
        <div className='my-projects' data-aos="fade-down">
          <div><h2>Projects</h2></div>

          <div className='container'>
        <p className='container-p'>Over the course of my career as a front-end developer, I've built several websites and applications. These are most of them:</p>
        <Slider {...settings}>
          <div className='card'>
            <img src={loanify} alt='loanify' style={{width:'370px', height:'300px'}} className='img'/>
            <div className="card-body">
             <h4>LOANIFY</h4>
             <p style={{paddingTop:'15px'}}>A loan prediction app</p>
             <ul>
              <li>REACT</li>
              <li>CSS</li>
              <li>MATERIAL UI</li>
             </ul>
             <div className='card-link'><a href='https://project-loanify-app.vercel.app/'><p>View site</p></a> <a href='https://github.com/JibolaJinadu/Loanify-Project'><p>Source code</p></a></div>
            </div>
          </div>
          <div className='card'>
          <img src={xoxo} alt='xoxo' style={{width:'370px', height:'300px'}} className='img'/>
          <div className="card-body">
          <h4>XOXO</h4>
             <p style={{paddingTop:'15px'}}>A site for purchasing clothing items</p>
             <ul>
              <li>REACT</li>
              <li>CSS</li>
             </ul>
             <div className='card-link'><a href='https://clothing-brand-wine.vercel.app/'><p>View site</p></a> <a href='https://github.com/CodewithOyinda/clothing-brand'><p>Source code</p></a></div>
          </div>
          </div>
          <div className='card'>
          <img src={starwars} alt='starwars' style={{width:'370px', height:'300px'}} className='img'/>
          <div className="card-body">
          <h4>STARWARS CLONE</h4>
             <p style={{paddingTop:'15px'}}>A clone of the STARWARS landing page</p>
             <ul>
              <li>REACT</li>
              <li>CSS</li>
             </ul>
             <div className='card-link'><a href='https://star-wars-movie.vercel.app/'><p>View site</p></a> <a href='https://github.com/CodewithOyinda/star-wars-movie'><p>Source code</p></a></div>
          </div>
          </div>
          <div className='card'>
          <img src={todo} alt='todo' style={{width:'370px', height:'300px'}} className='img'/>
          <div className="card-body">
          <h4>TODO APP</h4>
             <p style={{paddingTop:'15px'}}>A minimalist to-do app</p>
             <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
             </ul>
             <div className='card-link'><a href='https://codewithoyinda.github.io/Simple-Todo-App/'><p>View site</p></a> <a href='https://github.com/CodewithOyinda/Simple-Todo-App'><p>Source code</p></a></div>
          </div>
          </div>
          <div className='card'>
          <img src={netflix} alt='netflix' style={{width:'370px', height:'300px'}} className='img'/>
          <div className="card-body">
          <h4>NETLIX CLONE</h4>
             <p style={{paddingTop:'15px'}}>A clone of the NETFLIX landing page</p>
             <ul>
              <li>HTML</li>
              <li>CSS</li>
             </ul>
             <div className='card-link'><a href='https://stellular-tartufo-4a3b7b.netlify.app/'><p>View site</p></a> <a href='https://github.com/CodewithOyinda/Dazzle-flix'><p>Source code</p></a></div>
          </div>
          </div>
          <div className='card'>
          <img src={instagram} alt='instagram' style={{width:'370px', height:'300px'}} className='img'/>
          <div className="card-body">
          <h4>INSTAGRAM CLONE</h4>
             <p style={{paddingTop:'15px'}}>A clone of the INSTAGRAM landing page</p>
             <ul>
              <li>HTML</li>
              <li>CSS</li>
             </ul>
             <div className='card-link'><a href='https://symphonious-squirrel-e58681.netlify.app/#'><p>View site</p></a> <a href='https://github.com/CodewithOyinda/Oyinsta'><p>Source code</p></a></div>
          </div>
          </div>
          <div className='card'>
          <img src={portfolio} alt='portfolio' style={{width:'370px', height:'300px'}} className='img'/>
          <div className="card-body">
          <h4>PORTFOLIO SITE</h4>
           <p style={{paddingTop:'15px'}}>My portfolio site</p>
             <ul>
              <li>REACT</li>
              <li>CSS</li>
             </ul>
             <div className='card-link'><a href='https://oyindamola-a.vercel.app/'><p>View site</p></a> <a href='https://github.com/CodewithOyinda/my-portfolio'><p>Source code</p></a></div>
          </div>
          </div>
          <div className='card'>
          <img src={perfume} alt='perfume' style={{width:'370px', height:'300px'}} className='img'/>
          <div className="card-body">
          <h4>PERFUME</h4>
             <p style={{paddingTop:'15px'}}>A Minimalist perfume design site</p>
             <ul>
              <li>HTML</li>
              <li>CSS</li>
             </ul>
             <div className='card-link'><a href='https://lively-cendol-f17983.netlify.app/'><p>View site</p></a> <a href='https://github.com/CodewithOyinda/CodeLearnGrow-Assessment/tree/main'><p>Source code</p></a></div>
          </div>
          </div>
          <div className='card'>
          <img src={profile} alt='xoxo' style={{width:'370px', height:'300px'}} className='img'/>
          <div className="card-body">
          <h4>SEARCH PROFILE</h4>
             <p style={{paddingTop:'15px'}}>A site that searches for profiles by name</p>
             <ul>
              <li>REACT</li>
              <li>CSS</li>
             </ul>
             <div className='card-link'><a href='https://company-profile-roan.vercel.app/'><p>View site</p></a> <a href='https://github.com/CodewithOyinda/company-profile'><p>Source code</p></a></div>
          </div>
          </div>
        </Slider>
      </div>
          
        </div>
        <ButtomNav/>
    </div>
  )
}

export default Project