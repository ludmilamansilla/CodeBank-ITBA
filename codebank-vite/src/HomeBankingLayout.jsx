import Logo from './Logo';
import BarraNav from './BarraNav';
import './HomeBankingLayout.css';
import { Outlet } from 'react-router-dom';


function HomeBankingLayout(props) {

    return (  
    
    <div className='pagina'>

        <div className='sidebar'>
            <Logo/>
            <hr />
            <BarraNav items={props.items}/>
        </div>

        <div className='contenido'>
            <Outlet />
        </div>

    
    </div>);
}

export default HomeBankingLayout;