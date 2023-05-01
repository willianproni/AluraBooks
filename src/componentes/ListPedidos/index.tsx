import { AbBotao } from "ds-alurabooks";
import React from "react";
import './styles.css'
import { UseAuth } from "../../context/auth";
import { PedidosProps } from "../../interfaces/IPedidos";
import http from "../../http";

const ListPedidos = ({ id, data, entrega, total }: PedidosProps) => {

    const { user } = UseAuth()

    async function excluirPedido(id?: number) {
        http.delete(`/pedidos/${id}`, {
            headers: { Authorization: `Bearer ${user.token}` }
        }).then(() => console.log('sucesso'))
            .catch(() => console.log('test'))
    }

    return (
        <div className='pedido'>
            <ul className='AreaPedidos'>
                <li>Pedido: <strong>{id}</strong></li>
                <li>Data do pedido: <strong>{data}</strong></li>
                <li>Valor total: <strong>R$ {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(total ?? 0)}</strong></li>
            </ul>
            <AbBotao texto='Detalhes' />
            <AbBotao texto='Excluir' tipo="secundario" onClick={() => excluirPedido(id)} />
        </div>
    )
}

export default ListPedidos