import React from 'react'
import './footer.css'
// import facebook from '../../assests/imges/facebook.png'
// import instagram from '../../assests/imges/instagram.png'
// import github from '../../assests/imges/github.png'
// import twitter from '../../assests/imges/twitter.png'



function Footer() {
  return (  
    <div className='footerContainer'>
        <div className='socialIcons'> 
            <a href=''><i className='fa-brands fa-facebook'></i>   </a>
            <a href=''><i className='fa-brands fa-instagram'></i>  </a>
            <a href=''><i className='fa-brands fa-twitter'></i>   </a>
            <a href=''><i className='fa-brands fa-github'></i>   </a>
        </div> 
        <div className='footerNav'>
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>News</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Contact Us </a></li>
            <li><a href=''> Our Team </a></li>
          </ul>
        </div>
          <div className='footerBottom'>
            <p>copyright &copy; 2024; designend by <span className='designer'>Yomna</span></p>
          </div>



    </div>




      )
}

export default Footer





// <a href=''><i className='fa-brands fa-facebook'></i>  <img src={facebook} alt="" height={50} width={50}></img> </a>
// <a href=''><i className='fa-brands fa-instagram'></i>  <img src={instagram} alt=""  height={50} width={50}></img> </a>
// <a href=''><i className='fa-brands fa-twitter'></i>  <img src={twitter} alt="" height={50} width={50}></img> </a>
// <a href=''><i className='fa-brands fa-github'></i>  <img src={github} alt="" height={50} width={50}></img> </a>
// </div> 