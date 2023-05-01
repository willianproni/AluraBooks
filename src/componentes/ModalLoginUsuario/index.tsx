import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import React, { useState } from "react";
import imagemPrincipal from './assets/login.png'
import './ModalLoginUsuario.css'
import { UseAuth } from "../../context/auth";

type ModalLoginUsuarioProps = {
    abrirLogin: boolean;
    closeLogin: () => void;
}

const ModalLoginUsuario = ({ abrirLogin, closeLogin }: ModalLoginUsuarioProps) => {
    const { signIn } = UseAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function onSubmit(params: React.FormEvent<HTMLFormElement>) {
        params.preventDefault()
        const login = {
            email,
            senha: password
        }
        await signIn(login)
    }

    return (
        <AbModal
            aberta={abrirLogin}
            aoFechar={closeLogin}
            titulo="LOGIN">
            <section className="CorpoModal">
                <picture>
                    <img src={imagemPrincipal} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
                </picture>
                <form onSubmit={onSubmit}>
                    <AbCampoTexto
                        label="E-mail"
                        type="email"
                        value={email}
                        onChange={setEmail}
                        placeholder="seuemail@maneiro.com.br"
                    />

                    <AbCampoTexto
                        label="Senha"
                        type="password"
                        value={password}
                        onChange={setPassword}
                        placeholder="***********"
                    />

                    <div className="buttonAction">
                        <a>Esqueci minha senha</a>

                        <AbBotao texto="Fazer login" />
                    </div>
                </form>
            </section>
        </AbModal>
    )
}

export default ModalLoginUsuario