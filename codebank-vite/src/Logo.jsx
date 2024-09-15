import { Link } from 'react-router-dom';

function Logo() { 
  return (
    <div className="logo">
     <Link to="/"><img src='../public/images/logoCodeBank.png' alt="logo" /></Link> 
     <span className="logo-text">CodeBank</span>
    </div>
  );
}

export default Logo;