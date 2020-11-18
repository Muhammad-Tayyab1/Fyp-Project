import { GitHub, Facebook, Twitter, Instagram, LinkedIn} from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
 
 const handleClick =(e)=>{
e.preventDefault();
window.location.reload(false);
 }
    return (
        <div>
  <footer className="footer-distributed">
    <div className="footer-left">
      <h3 onClick={handleClick}>About<Link to="/"><span>Shoes Point</span></Link> </h3>
      <p className="footer-links">
        <Link to="/">Home</Link>
        |
        <Link to="/product">Products</Link>
        |
        <Link to ="/about">About</Link>
        |
        <Link to="/contect">Contact</Link>
      </p>
      <p className="footer-company-name">© 2020 Shoe Point.</p>
    </div>
    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker" />
        <p><span>Daska, Sialkot</span>
         Daska - 51010</p>
      </div>
      <div>
        <i className="fa fa-phone" />
        <p>03096127551</p>
      </div>
      <div>
        <i className="fa fa-envelope" />
        <p><a href="mailto:m.tayyab0162@gmail.com">m.tayyab0162@gmail.com</a></p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>The Shoes Point</span>
        Collection of different styles and design Shoes</p>
      <div className="footer-icons">
        
             <a href="https://web.facebook.com/profile.php?id=100031034920869" ><Facebook/></a>
         <a href="https://twitter.com/Muhamma45165722" ><Twitter/></a>
        <a href="https://www.instagram.com/muhammadtayyab575/?hl=en" ><Instagram/></a> 
        <a href="https://www.linkedin.com/in/muhammad-tayyab-487b77192/" ><LinkedIn/></a> 
        <a href="https://github.com/Muhammad-Tayyab1" ><GitHub/></a> 
      </div>
    </div>
  </footer>
</div>


    )
}

export default Footer
