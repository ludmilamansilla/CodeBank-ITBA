import { Link } from 'react-router-dom';


function BarraNav (props) {
    return (
        <nav className='BarraNav'>
            <ul>
                {props.items.map((item) => <li key={item.txt}> <Link to={item.lnk}> {item.txt}
                    </Link> </li> )}   
            </ul>
        </nav>
    );
}

export default BarraNav;