/*import toggleMenu from '../../public/js/script.js';

function IconHeader({icon, label, iClass}) {
 return (
    <button className={icon} aria-label={label} onClick={icon === "menu.icon" ? toggleMenu(): ""}>,
        <i className={iClass}></i>
        {icon === "menu.icon" ? <span className="menu-text">Menu</span> : ""}
    </button>
  
    
    );
}

export default IconHeader;*/

function IconHeader({icon, label, iClass}) {
    return (
       <button className={icon} aria-label={label}>
           <i className={iClass}></i>
           {icon === "menu.icon" ? <span className="menu-text">Menu</span> : ""}
       </button>
     
       
       );
   }
   
   export default IconHeader;
