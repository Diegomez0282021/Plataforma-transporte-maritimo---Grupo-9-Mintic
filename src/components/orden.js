import React from 'react'

export default function orden() {
    return (
        <section className="contact-clean">
                <form method="post">
                    <h2 className="text-center">Crear orden de despacho</h2>
                    <div className="mb-3">
                        <input className="form-control" type="text" name="nombre" placeholder="Nombre"></input>
                    </div>
                    <div className="mb-3"><textarea className="form-control" name="descripcion" placeholder="Descripcion"></textarea></div>
                    <div className="mb-3"><input className="form-control" type="number" placeholder="Peso en Kg" name="peso"></input></div>
                    <div className="mb-3"><input className="form-control" type="number" placeholder="Largo" name="largo"></input></div>
                    <div> <input className="form-control" type="number" name="alto" placeholder="Alto"></input></div><br></br>
                    <div> <input className="form-control" type="number" placeholder="Ancho" name="Ancho"></input></div><br></br>

                    <div className="mb-3"><select className="form-select">
                            <optgroup label="origen">
                                <option value="12" selected="">-Seleccionar origen-</option>
                                <option value="13">This is item 2</option>
                                <option value="14">This is item 3</option>
                            </optgroup>
                        </select></div>
                    <div className="mb-3"><select className="form-select">
                            <optgroup label="destino">
                                <option value="12" selected="">-Seleccionar destino-</option>
                                <option value="13">This is item 2</option>
                                <option value="14">This is item 3</option>
                            </optgroup>
                        </select></div>
                    <div className="text-center mb-3"><button className="btn btn-primary text-center" type="submit">Enviar</button></div>
                </form>
        </section>

    )
}
