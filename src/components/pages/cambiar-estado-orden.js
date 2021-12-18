import React from 'react'


const guardar = () =>{
    return <h1>Guardado!</h1>
}
export default function cambiarEstadoOrden({data}) {
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
                        {data.map(e=>(
                            <tr>
                            <td>{e.id_orden}</td>
                            <td>{e.nombre}</td>
                            <td>{e.descripcion}</td>
                            <td>{e.dimensiones}</td>
                            <td>{e.origen}</td>
                            <td>{e.destino}</td>
                            <td>&nbsp;<select>
                            {e.estado==="Pendiente a despacho"&& 
                                <optgroup label="opciones">
                                    <option value="Pendiente a despacho" selected>Pendiente a despacho</option>
                                    <option value="Despachada">Despachada</option>
                                    <option value="Finalizada">Finalizada</option>
                                    <option value="Cancelada">Cancelada</option>
                                </optgroup>
                            }
                            {e.estado ==="Despachada" &&
                            <optgroup label="opciones">
                                <option value="Pendiente a despacho">Pendiente a despacho</option>
                                <option value="Despachada" selected>Despachada</option>
                                <option value="Finalizada">Finalizada</option>
                                <option value="Cancelada">Cancelada</option>
                            </optgroup>
                            }
                            {e.estado ==="Finalizada" &&
                            <optgroup label="opciones">
                                <option value="Pendiente a despacho">Pendiente a despacho</option>
                                <option value="Despachada">Despachada</option>
                                <option value="Finalizada" selected>Finalizada</option>
                                <option value="Cancelada">Cancelada</option>
                            </optgroup>
                            }
                            {e.estado ==="Cancelada" &&
                            <optgroup label="opciones">
                                <option value="Pendiente a despacho">Pendiente a despacho</option>
                                <option value="Despachada" >Despachada</option>
                                <option value="Finalizada">Finalizada</option>
                                <option value="Cancelada" selected>Cancelada</option>
                            </optgroup>
                            }
                                </select></td>
                        </tr>
                        ))}
                        
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
