import './CarruselDebajo.css';

function CarruselDebajo(props) {
  return (
    <section>
      {props.items.map((item, index) =>  
              <div className="articulo-carousel2" key={index}>
                <img src={item.img} alt={item.alt}/>
                <p>{item.descripcion}</p>
              </div>)}
    </section>
  );
}

export default CarruselDebajo;