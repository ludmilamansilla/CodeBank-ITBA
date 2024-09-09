

function CarruselDebajo(props) {
  return (
    <div className="articulo-carousel2">
            <img src={props.img} alt={props.alt}/>
            <p>{props.descripcion}</p>
    </div>
  );
}

export default CarruselDebajo;