import React from 'react'

export default function cambiarEstadoOrden() {
    return (
    <div>
        <section class="contact-clean">
            <h1 class="text-center">Cambiar estado de ordenes</h1>
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
            <div class="text-center"><button class="btn btn-primary" type="button">GUARDAR CAMBIOS</button></div>
        </section>
    </div>
    )
}
