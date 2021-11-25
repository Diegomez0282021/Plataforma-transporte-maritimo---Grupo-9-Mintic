import React from 'react'

export default function historial() {
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
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                        <td>Cell 5</td>
                        <td>Cell 6</td>
                        <td>Cell 6</td>
                    </tr>
                    <tr>
                        <td>Cell 7</td>
                        <td>Cell 8</td>
                        <td>Cell 9</td>
                        <td>Cell 10</td>
                        <td>Cell 11</td>
                        <td>Cell 12</td>
                        <td>Cell 12</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    )
}
