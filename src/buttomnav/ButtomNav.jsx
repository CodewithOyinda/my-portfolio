import React, {useState} from 'react';
import '../buttomnav/ButtomNav.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import heart from './img/Heart.png';

const ButtomNav = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyEmail = () => {
        const emailText = document.getElementById('email').innerText;
        navigator.clipboard.writeText(emailText)
          .then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); 
          })
          .catch((error) => {
            console.error('Failed to copy email to clipboard:', error);
          });
      };
    

return (
    <div className='my-contact'>
        <div className='contact'>
            <h3>Contact</h3>
            <p>Get in touch with me via email or socials.</p>
            <h2 id="email">adegokeoyinda.86@gmail.com</h2>
            <div className='email-btn'>
            <button className='copy-btn' onClick={handleCopyEmail}>
            {isCopied ? 'Email Copied!' : 'COPY EMAIL TO CLIPBOARD'}
            </button>
            </div>
            <div className='socials'>
             <div className='icon'><a href='http://linkedin.com/in/oyindamola-adegoke' title='LinkedIn'><BsLinkedin/></a></div>
             <div className='icon'><a href='https://instagram.com/o.y.i.n.d.a_?igshid=YmMyMTA2M2Y=' title='Instagram'><FaInstagram/></a></div>
             <div className='icon'><a href='https://twitter.com/AdegokeOyindam9' title='Twitter'><FaTwitter/></a></div>
             <div className='icon'><a href='https://github.com/CodewithOyinda' title='GitHub'><AiFillGithub/></a></div> 
            </div>
        </div>
        <div className='copyright'><p>© 2023|Designed and built by Adegoke Oyindamola</p> <img src={heart} alt='heart' style={{width:'20px', height:'20px'}}/>.</div>
    </div>
  )
}

export default ButtomNav