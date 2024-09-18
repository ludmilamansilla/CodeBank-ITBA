import { Link } from "react-router-dom";

function BarraNav({ items, accion }) {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
            item.isButton ? (<li key={index}>
              <button onClick={accion}>{item.txt}</button> </li>
            ) : (
              <Link to={item.lnk}><li key={index}>{item.txt}</li></Link> 
            )
        ))}
      </ul>
    </nav>
  );
}

export default BarraNav;
