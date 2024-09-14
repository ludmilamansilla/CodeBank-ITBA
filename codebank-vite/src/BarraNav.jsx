import { Link } from "react-router-dom";

function BarraNav({ items, accion }) {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.isButton ? (
              <button onClick={accion}>{item.txt}</button> 
            ) : (
              <Link to={item.lnk}>{item.txt}</Link> 
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BarraNav;
