import React from 'react'

export default function aceptarOrden() {
    return (
    <div>
        <section className="contact-clean">
            <h1 className="text-center">Aceptar ordenes</h1>
            <div className="table-responsive" style={{margintop: '30px'}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Dimensiones</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>¿Aceptar?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2</td>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                            <td>Cell 5</td>
                            <td>Cell 6</td>
                            <td><a href="#">Aceptar</a>&nbsp;/&nbsp;<a href="#">Rechazar</a></td>
                        </tr>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2</td>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                            <td>Cell 5</td>
                            <td>Cell 6</td>
                            <td><a href="#">Aceptar</a>&nbsp;/&nbsp;<a href="#">Rechazar</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
    )
}
