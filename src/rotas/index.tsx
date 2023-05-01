import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import PaginaBase from "../paginas/PaginaBase"
import MinhaConta from "../paginas/MinhaConta"
import MeusPedidos from "../paginas/MeusPedidos"


const Rotas = () => {
  return (
    <Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path='/myAccount' element={<MinhaConta />}>
          <Route path="pedidos" element={<MeusPedidos/>}/>
        </Route>
      </Route>
    </Routes>)
}

export default Rotas