import React from "react";
import { Link, Outlet } from "react-router-dom";

import './index.css'

const MinhaConta = () => {
    return (
        <>
            <h1 className="AreaLogada__titulo">Minha conta</h1>
            <section className="AreaLogada">
                <div className="menu">
                    <ul className="navegacao">
                        <li>
                            <Link to='/myAccount/pedidos'>Pedidos</Link>
                        </li>
                        <li>
                            <Link to='/'>Trocas</Link>
                        </li>
                        <li>
                            <Link to='/'>Cupons</Link>
                        </li>
                        <li>
                            <Link to='/'>Seus dados</Link>
                        </li>
                    </ul>
                </div>
                <div className="conteudo">
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default MinhaConta