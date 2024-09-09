

function SecH3ParrImg( {heading, paragraph, img, alt, button} ) {
    return (
        <section>
            <hr/>
            <div className="SecH3ParrImg">
                <div>
                    <h3>{heading}</h3>
                    <p>{paragraph} </p>
                    <button>{button}</button>
                </div>
                <div>
                    <img src={img} alt={alt}/>
                </div>
            </div>
        </section>);
}

export default SecH3ParrImg;