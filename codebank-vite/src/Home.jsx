import Header from './Header'
import Footer from './Footer'
import SecH3ParrImg from './SecH3ParrImg'
import Panel from './Panel'
import CarruselDebajo from './CarruselDebajo'
import Carrousel from './Carrousel'
import Formulario from './Formulario'







function Home() {
    return (<> <Header items={[
        { txt: "Home", lnk: "/" },
        { txt: "Iniciar sesion", lnk: "#", isButton: true },
        { txt: "Empresas", lnk: "/" }
      ]}/>
      <Carrousel images={['../public/images/carousel/1.png','../public/images/carousel/2.png']}/>
      <CarruselDebajo items={[
        {
          img: "https://www.bbva.com.ar/content/dam/public-web/global/images/icons/1_007_creditcard.svg",
          alt: "",
          descripcion: "Solicitar tarjeta de crédito"
        },
        {
          img: "https://www.bbva.com.ar/content/dam/public-web/global/images/icons/1_003_cash.svg",
          alt: "",
          descripcion: "Abrir cuenta sueldo"
        },
        {
          img: "https://www.bbva.com.ar/content/dam/public-web/global/images/icons/1_023_loan.svg",
          alt: "",
          descripcion: "Simular préstamo personal"
        },
        {
          img: "https://www.bbva.com.ar/content/dam/public-web/global/images/icons/1_002_dollar.svg",
          alt: "",
          descripcion: "Abrir caja de ahorro"
        },
        {
          img: "https://www.bbva.com.ar/content/dam/public-web/global/images/icons/1_026_investment.svg",
          alt: "",
          descripcion: "Créditos hipotecarios"
        }
      ]}
      />
      

      <SecH3ParrImg heading="Depositá tu sueldo en CodeBank y usá los grandes beneficios" img="../public\images\zenus-bank-women-helping-man.webp" alt="" paragraph="Si traés tu sueldo a CodeBank, te regalamos hasta $300.000 en tu tarjeta . Además, vas a tener tu cuenta bonificada y accedés a ahorros exclusivos de hasta 30%." button="Conocé más" />

      <div className='paneles'>
        <Panel
          src="https://www.bbva.com.ar/content/dam/public-web/global/images/micro-illustrations/relocation_loan_dollar_dark.im1712051385184im.png?imwidth=1176"
          alt="Icono prestamo"
          title="Préstamos personales"
          description="Conocé los préstamos que tenemos para vos y elegí el que más te convenga."
          botonTxt="Ver más"
          claseBoton="button-section2"
        />

        <Panel
          src="https://www.bbva.com.ar/content/dam/public-web/global/images/micro-illustrations/bbva_managers_1.png.img.320.1720636385103.png"
          alt="Imagen de comercios"
          title="Emprendedores"
          description="En CodeBank, entendemos el espíritu emprendedor y queremos ayudarte a hacer realidad tus proyectos. Ofrecemos una amplia gama de servicios financieros."
          botonTxt="Ver más"
          claseBoton="button-section2"
        />

        <Panel
          src="https://www.bbva.com.ar/content/dam/public-web/global/images/micro-illustrations/small_business.im1712051274447im.png?imwidth=160"
          alt="Imagen de comercios"
          title="Comercios"
          description="Descubre los beneficios exclusivos que tenemos para tu negocio y aprovecha al máximo todas las soluciones financieras que CodeBank ofrece para comercios."
          botonTxt="Ver más"
          claseBoton="button-section2"
        />

        <Panel
          src="https://www.bbva.com.ar/content/dam/public-web/global/images/micro-illustrations/devices.im1715975845079im.png?imwidth=1176"
          alt="Imagen de comercios"
          title="Puntos CodeBank"
          description="Conocé los beneficios exclusivos que tenemos para vos y aprovechá al máximo tus puntos CodeBank."
          botonTxt="Ver recompensas"
          claseBoton="button-section2"
        />
      </div>



      <Footer /> 
      </>);
}

export default Home;