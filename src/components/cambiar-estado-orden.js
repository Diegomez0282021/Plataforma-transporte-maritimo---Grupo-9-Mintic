import React from 'react'


const guardar = () =>{
    return <h1>Guardado!</h1>
}
export default function cambiarEstadoOrden() {
    return (
    <div>
        <section classNameName="contact-clean">
            <h1 className="text-center">Cambiar estado de ordenes</h1>
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
                            <td>&nbsp;<select>
                                    <optgroup label="opciones">
                                        <option value="Pendiente a despacho" selected="">Pendiente a despacho</option>
                                        <option value="Despachada">Despachada</option>
                                        <option value="Finalizada">Finalizada</option>
                                        <option value="Cancelada">Cancelada</option>
                                    </optgroup>
                                </select></td>
                        </tr>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2</td>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                            <td>Cell 5</td>
                            <td>Cell 6</td>
                            <td>&nbsp;<select>
                                    <optgroup label="opciones">
                                        <option value="Pendiente a despacho" selected="">Pendiente a despacho</option>
                                        <option value="Despachada">Despachada</option>
                                        <option value="Finalizada">Finalizada</option>
                                        <option value="Cancelada">Cancelada</option>
                                    </optgroup>
                                </select></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="buttons">
                <button className="btn btn-primary" type="button" onClick={guardar} >GUARDAR CAMBIOS</button>             
                <button className="btn btn-danger" type="button" >ELIMINAR CAMBIOS</button>
             </div>
        </section>
    </div>
    )
}
