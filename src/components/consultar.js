import React from 'react'

export default function consultar() {
    return (
        <section className="contact-clean">
        <h1 className="text-center">Consultar orden de despacho</h1>
        <form className="search-form">
            <div className="input-group"><span className="input-group-text"><i className="fa fa-search"></i>
            </span><input className="form-control" type="text" placeholder="Codigo" name="codigo"/>
            <button className="btn btn-light" type="button">Buscar</button></div>
        </form>
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
                </tbody>
            </table>
        </div>
    </section>
    )
}
