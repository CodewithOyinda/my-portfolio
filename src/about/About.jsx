import React, {useEffect} from 'react'
import ButtomNav from '../buttomnav/ButtomNav';
import Nav from '../nav/Nav';
import '../about/About.css';
import mine from './img/oyinda.png';
import smiley from './img/Smiley.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='about-me'>
        <Nav/>
        <div data-aos="fade-down">
          <div className='hello'><h2>Hello</h2> <img src={smiley} alt='smiley' style={{width:'37px', height:'37px'}} /></div>
          <img src={mine} alt='mine' style={{width:'350px', height:'350px'}} className='mine'/>
          <div className='my-name'>
            <p style={{fontSize:'18px'}}>NAME</p>
            <p> I am Adegoke Deborah Oyindamola, and my name carries significant meanings. "Adegoke" symbolizes "The crown has been exalted," and "Oyindamola" represents "Honey mixed with wealth." While I am commonly known as "Oyindamola," I use "Deborah" professionally as it is my first name.</p>
          </div>
          <div className='past'>
            <p style={{fontSize:'18px'}}>PAST</p>
            <p>I was born and brought up in Niger state, Nigeria. My childhood was filled with joyful moments of play, quality time with my family, and the regularity of school and church. The fond memories of those times are precious to me. </p>
            <p>As I grew up, I developed a strong interest in cooking, which eventually led me to pursue a degree in food science and technology. </p>
            <p>It was during my time at university that I also discovered my talent for makeup artistry, and I realized my deep passion for enhancing the beauty of things.</p>
          </div>
          <div className='present'>
            <p style={{fontSize:'18px'}}>PRESENT</p>
            <p>As you know, my passion for beautifying things has been a driving force in my life. While I thoroughly enjoyed my time as a makeup artist, I made the decision to explore another realm where I can channel my passion and creativity. I transitioned into the field of frontend development, and it has been an incredible experience so far.</p>
            <p>It allows me to utilize my eye for aesthetics, attention to detail, and understanding of color harmony in a digital context. Just as a makeup artist enhances natural beauty, I now have the ability to transform digital landscapes and create visually stunning user experiences.</p>

          </div>
          <div className='future'>
            <p style={{fontSize:'18px'}}>FUTURE</p>
            <p>The world of frontend development offers endless opportunities for creative expression and innovation. It allows me to combine my love for aesthetics with technical skills to craft engaging and delightful experiences for users.</p>
            <p>It's a dynamic field that constantly challenges me to learn and grow, and I couldn't be more excited about the possibilities it presents.</p>
          </div>
        </div>
        <ButtomNav/>
    </div>
  )
}

export default About