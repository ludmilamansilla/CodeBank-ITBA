import Logo from "./Logo";
import { Link } from 'react-router-dom';
import BarraNav from "./BarraNav";
import './Footer.css';


function Footer() {
    return (
        <footer className="footer">
            <Logo logo=""/>
            <BarraNav items={[{txt: "Aviso Legal", lnk: "/"}, {txt: "Terminos y Condiciones", lnk: "/"}, {txt: "Recomendaciones de Seguridad", lnk: "/"}]}/>
            <BarraNav items={[{txt: "Facebook", lnk: "/"}, {txt: "Twitter", lnk: "/"}, {txt: "Instagram", lnk: "/"}]}/>
                <div className="footer_copyright">
                    <p>© 2024 Banco CodeBank Argentina (ITBA)</p>
                    <Link to="#"><p className="">Educación financiera</p></Link>
                </div>
        </footer>
    );
}

export default Footer;