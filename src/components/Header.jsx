import { useState} from "react";
import  MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


import "../styles/header.css";


function Navbar(){
  const [isMenuOpen, setIsMenuOpen]= useState(false);



const  menuIcon= () => {
  setIsMenuOpen(!isMenuOpen);
  
  };
  
return(

  <div>
    
    <header class="header">
    <div class="container">
      <div class="logo">Edu<span>vaa</span></div>
      <nav class="navbar">
        <ul class="ul">
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>
      
      <button class="signup-btn">Sign Up</button>
     
      <div className="menu">
      {isMenuOpen ?  <CloseIcon className="menu-btn" onClick={menuIcon}/> : <MenuIcon className="menu-btn" onClick={menuIcon}/>}
       {
        isMenuOpen && 
        <ul class="ul">
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
       }
      
        </div>
       
      

      
      
      
      
      
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="hero-content">
        <h1>Don’t just dream, learn with us</h1>
        <p>Education is the foundation for personal and societal growth. It fosters critical thinking, creativity, and problem-solving skills.</p>
        <button class="read-more-btn">Read More</button>
      </div>
      <div class="hero-image">
        <img src="/src/images/kid.png" alt="" />
       
        <blockquote>
          "Education empowers individuals to achieve their potential and contribute positively to their communities and the world."
        </blockquote>
      </div>
    
             
    </section>
  </main>
  </div>

          

  
);
};
export default Navbar;