import React, { useEffect, useState } from 'react'
import { AbBotao } from 'ds-alurabooks'

import axios from 'axios'
import { UseAuth } from '../../context/auth'
import ListPedidos from '../../componentes/ListPedidos'
import { PedidosProps } from '../../interfaces/IPedidos'
import http from '../../http'



const MeusPedidos = () => {
    const { user } = UseAuth()

    const [pedidos, setPedidos] = useState<PedidosProps[] | []>([])

    useEffect(() => {
        async function getPedidos() {
            await http.get<PedidosProps[]>('/pedidos')
                .then((response) => {
                    setPedidos(response.data)
                })
                .catch((err) => (console.log(err)))
        }
        getPedidos()
    }, [])

    return (
        <section className='pedidos'>
            <h1>Meus pedidos</h1>
            {pedidos.map(pedidos => <ListPedidos
                id={pedidos.id}
                data={pedidos.data}
                entrega={pedidos.entrega}
                total={pedidos.total}
                key={pedidos.id}
            />)}

        </section>)
}

export default MeusPedidos