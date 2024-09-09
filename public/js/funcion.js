function mover(id) {
    const foto = document.getElementById(id);

    const handleMouseMove = function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const fotoWidth = foto.offsetWidth;
        const fotoHeight = foto.offsetHeight;

        const fotoCenterX = foto.offsetLeft + fotoWidth / 2;
        const fotoCenterY = foto.offsetTop + fotoHeight / 2;

        const angleX = (fotoCenterY - mouseY) * 0.004;
        const angleY = (fotoCenterX - mouseX) * -0.030;

        foto.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1,1,1)`;
    };

    const handleMouseOut = function() {
        document.removeEventListener('mousemove', handleMouseMove);
        foto.style.transform = `perspective(500px) rotateX(${0}deg) rotateY(${0}deg) scale3d(1,1,1)`;
    };

    foto.addEventListener('mouseover', function() {
        document.addEventListener('mousemove', handleMouseMove);
    });

    foto.addEventListener('mouseout', handleMouseOut);
}

export default mover;