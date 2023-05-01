import { Link } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import { useState } from "react"
import ModalLoginUsuario from "../ModalLoginUsuario"
import { UseAuth } from "../../context/auth"

const BarraNavegacao = () => {

    const { user, cleanStorageToken } = UseAuth()
    const [aberto, setAberto] = useState(false)
    const [abrirLogin, setAbrirLogin] = useState(false)

    return (<nav className="ab-navbar">
        <h1 className="logo">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo da AluraBooks" />
            </Link>
        </h1>
        <ul className="navegacao">
            <li>
                <a href="#!">Categorias</a>
                <ul className="submenu">
                    <li>
                        <Link to="/">
                            Frontend
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Programação
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Infraestrutura
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Design e UX
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="acoes">
            {user.name ? (
                <>
                    <ul className="navegacao">
                        <li>
                            <Link to="/myAccount ">Olá {user.name}</Link>
                            <ul className="submenu">
                                <li>
                                    <Link to="/myAccount/pedidos">
                                        Pedidos
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Trocas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Cupons
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Seus dados
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <li>
                        <Link to="/" onClick={() => cleanStorageToken()}>
                            Sair
                        </Link>
                    </li>
                </>
            ) : (<>
                <li>
                    <BotaoNavegacao
                        texto="Login"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={() => setAbrirLogin(true)}
                    />
                </li>
                <li>
                    <BotaoNavegacao
                        texto="Cadastrar-se"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={() => setAberto(true)}
                    />
                    <ModalCadastroUsuario aberto={aberto} aoFechar={() => setAberto(false)} />
                    <ModalLoginUsuario abrirLogin={abrirLogin} closeLogin={() => setAbrirLogin(false)} />
                </li>
            </>)}
        </ul>
    </nav>)
}

export default BarraNavegacao