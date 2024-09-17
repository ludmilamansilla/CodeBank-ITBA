
import './App.css'
import Converter from './Convertidor'
import Prestamos from './Prestamos'
import Facturas from './Facturas'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeBankingLayout from './HomeBankingLayout'
import HomeBanking from './HomeBanking'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homebanking" element={<HomeBankingLayout items={[
            { txt: "Inicio", lnk: "/homebanking" },
            { txt: "Conversor de Moneda", lnk: "/homebanking/convertidor" },  
            { txt: "Calcular Prestamo", lnk: "/homebanking/prestamos" },
            { txt: "Pagar Facturas", lnk: "/homebanking/facturas" },
            { txt: "Ayuda", lnk: "#" }
          ]}/>}>
            
            <Route index element={<HomeBanking />} />
            <Route path="prestamos" element={<Prestamos />} />
            <Route path="facturas" element={<Facturas />} />
            <Route path="convertidor" element={<Converter />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App