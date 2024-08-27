
import { NavLink, useLocation } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import '../../app.css'
const Header = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/about':
        return 'About Us';
      case '/contact':
        return 'Contact Us';
      case '/login':
        return 'Login';
      default:
        return 'Home';
    }
  };

  return (
    <section className={location.pathname === '/' ? 'header' : 'sub-header'}>
      <nav>
        <div className="nav-links" id="navLinks">
          
          <ul>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/about'>ABOUT</NavLink></li>
      
            <li><NavLink to='/login'>LOGIN</NavLink></li>
            <li><NavLink to='/register'>REGISTER</NavLink></li>
          </ul>
        </div>
        
      </nav>

      {location.pathname === '/' ? (
        <div className="text-box">
          <h1>The Book Corner</h1>
          <p>
          "The only thing you absolutely have to know is the location of the library."<br/> — Albert Einstein
          </p>
          <a href="#" className="home-btn">Visit Us to Know More</a>
        </div>
      ) : (
        <h1>{getTitle()}</h1>
      )}
    </section>
  );
};

export default Header;
