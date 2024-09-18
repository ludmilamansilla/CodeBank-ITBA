import { Link } from "react-router-dom";


function HomeBanking() {
    return ( 
    
    
    <div className="main">
        <h1>Pagina de inicio HomeBanking de CodeBank</h1>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, repellat ratione culpa et maxime, praesentium mollitia tenetur fugiat deleniti neque veritatis molestiae ullam nihil cum magni libero sed odit expedita?</p>
        <p>Navega por el menú desplegable para más opciones</p>
        <br/>
        <p>En este homebanking solo pueden ingresar los usuarios con cuenta de CodeBank</p>
        <hr/>
        <Link to='/'><button className="volver-home">Volver al home</button></Link>
        
    </div> );
}

export default HomeBanking;