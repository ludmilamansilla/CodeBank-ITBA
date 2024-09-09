import BarraNav from "./BarraNav";
import IconHeader from "./IconHeader";
import Logo from "./Logo";
import './Header.css';


// faltan elementos como barra de busqueda y menu hamburguesa

function Header() {
  return (
    <header>
        <Logo logo=""/>
        <BarraNav items={[{txt: "Home", lnk: "/"}, {txt: "Cuentas", lnk: "/"}, {txt: "Tarjetas", lnk: "/"}, {txt: "Inversiones", lnk: "/"}, {txt: "Ayuda", lnk: "/"}]}/>
        <div>
           <IconHeader iClass={"fa-solid fa-magnifying-glass"}/>
           <IconHeader iClass={"fa-solid fa-user"}/>
           <IconHeader iClass={"fa-solid fa-bars"}/>
        </div>
    </header>
  );
}

export default Header;