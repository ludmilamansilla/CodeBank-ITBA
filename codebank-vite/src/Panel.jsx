/*import mover from '../../public/js/funcion.js';

function Panel(props) {
  return (
  
        <div onmouseenter={mover()}>
            <img src={props.src} alt={props.alt}/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button className={props.claseBoton}>{props.botonTxt}</button>
        </div>);
}

export default Panel;*/

function Panel(props) {
  return (
  
        <div>
            <img src={props.src} alt={props.alt}/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button className={props.claseBoton}>{props.botonTxt}</button>
        </div>);
}

export default Panel;