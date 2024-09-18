import Logo from "./Logo";
import { Link } from 'react-router-dom';
import BarraNav from "./BarraNav";
import './Footer.css';


function Footer() {
    return (
        <footer className="footer">
            <Logo/> 
            <div className="links">
                <BarraNav items={[{txt: "Aviso Legal", lnk: "/"}, {txt: "Terminos y Condiciones", lnk: "/"}, {txt: "Recomendaciones de Seguridad", lnk: "/"}]}/>
                <BarraNav items={[{txt: "Facebook", lnk: "/"}, {txt: "Twitter", lnk: "/"}, {txt: "Instagram", lnk: "/"}]}/>
            </div>
        </footer>
    );
}

export default Footer;