import React from 'react'

export default function ordenesDia({datos,date}) {
    let datosDia=datos.ordenes.filter(e=> e.fecha===date)
    return (

        <div>
            <section class="contact-clean">
                    <h1 class="text-center">Ordenes del día</h1>
                    <div class="table-responsive" style={{margintop: '30px'}}>
                    <table class="table">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Dimensiones</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                            {datosDia.map(e=>(
                                <tr>
                                    <td>{e.id_orden}</td>
                                    <td>{e.nombre}</td>
                                    <td>{e.descripcion}</td>
                                    <td>{e.dimensiones}</td>
                                    <td>{e.origen}</td>
                                    <td>{e.destino}</td>
                                    <td>{e.estado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>  
        </div>
    )
}
