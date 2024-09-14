import './CarruselDebajo.css';

function CarruselDebajo(props) {
  return (
    <section>
      {props.items.map((item) =>  
              <div className="articulo-carousel2">
                <img src={item.img} alt={item.alt}/>
                <p>{item.descripcion}</p>
              </div>)}
    </section>
  );
}

export default CarruselDebajo;