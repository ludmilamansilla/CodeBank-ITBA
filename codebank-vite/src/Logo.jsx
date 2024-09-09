import { Link } from 'react-router-dom';

function Logo({ logo }) { 
  return (
    <div className="logo">
     <Link to="/"><img src={logo} alt="logo" /></Link> 
     <span className="logo-text">CodeBank</span>
    </div>
  );
}

export default Logo;