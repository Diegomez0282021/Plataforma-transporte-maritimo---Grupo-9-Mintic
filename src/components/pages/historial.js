import React from 'react'

export default function historial({datos}) {
    return (
        
        <section className="contact-clean">
        <h1 className="text-center">Historial de ordenes de despacho</h1>
        <div className="table-responsive">
            <table className="table">
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
                    {datos.ordenes.map(e=>(
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
    )
}
