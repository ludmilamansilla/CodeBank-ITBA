import React, { useState, useEffect } from 'react';
import './Carrousel.css'; 

function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;

  // Cambiar la diapositiva automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 5000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [currentSlide]);

  const moveSlide = (direction) => {
    let newSlide = currentSlide + direction;

    if (newSlide < 0) {
      newSlide = totalSlides - 1;
    } else if (newSlide >= totalSlides) {
      newSlide = 0;
    }

    setCurrentSlide(newSlide);
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
      <button className="carousel-button left" onClick={() => moveSlide(-1)}>
        &#10094;
      </button>
      <button className="carousel-button right" onClick={() => moveSlide(1)}>
        &#10095;
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setSlide(index)}
            className={index === currentSlide ? 'active' : ''}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;