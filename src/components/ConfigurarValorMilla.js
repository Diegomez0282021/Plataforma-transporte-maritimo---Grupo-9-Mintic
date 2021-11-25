import React from 'react'

function ConfigurarValorMilla() {
    return (
        <section class="contact-clean">
            <h1 class="text-center">Configurar valor de milla náutica</h1>
            <form class="text-center"><label class="form-label text-dark" for="valor_actual">Valor actual</label><input class="form-control" type="number" name="valor_actual" readonly="" value="1000"/><label class="form-label" for="nuevo_valor" style={{margin: "20px"}}>Nuevo valor</label><input class="form-control" type="number" name="nuevo_valor" placeholder="Ejemplo: 1200"/><button class="btn btn-primary text-center" type="submit">Aceptar</button></form>
        </section>
    )
}

export default ConfigurarValorMilla

