import { Link } from "react-router-dom";

function BarraNav({ items }) {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.onClick ? (
              <button onClick={item.onClick}>{item.txt}</button> 
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
