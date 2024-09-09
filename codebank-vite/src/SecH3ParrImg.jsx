import './SecH3ParrImg.css';

function SecH3ParrImg( {heading, paragraph, img, alt, button} ) {
    return (
        <div className="SecH3ParrImg">
            <div>
                <h3>{heading}</h3>
                <p>{paragraph} </p>
                <button>{button}</button>
            </div>
            <img src={img} alt={alt}/>
        </div>);
}

export default SecH3ParrImg;