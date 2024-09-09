import { Link } from 'react-router-dom';

function Logo({ logo }) { 
  return (
    <div className="logo">
     <Link to="/home"><img src='../public/images/logoCodeBank.png' alt="logo" /></Link> 
     <span className="logo-text">CodeBank</span>
    </div>
  );
}

export default Logo;