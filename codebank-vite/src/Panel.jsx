import './Panel.css';


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