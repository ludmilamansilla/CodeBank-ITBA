import BarraNav from "./BarraNav";
import IconHeader from "./IconHeader";
import Logo from "./Logo";


// faltan elementos como barra de busqueda y menu hamburguesa

function Header() {
  return (
    <header>
        <Logo logo=""/>
        <BarraNav items={[{txt: "Home", lnk: "/"}, {txt: "Cuentas", lnk: "/"}, {txt: "Tarjetas", lnk: "/"}, {txt: "Inversiones", lnk: "/"}, {txt: "Ayuda", lnk: "/"}]}/>
        <div>
           <IconHeader/>
           <IconHeader/>
           <IconHeader/>
        </div>
    </header>
  );
}

export default Header;