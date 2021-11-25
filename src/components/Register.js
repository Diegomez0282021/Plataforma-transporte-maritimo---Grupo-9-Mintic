import React from 'react'

function Register() {
    return (
        <div class="row register-form">
        <div class="col-md-8 offset-md-2">
            <form class="custom-form">
                <h1>Register Form</h1>
                <div class="row form-group">
                    <div class="col-sm-4 label-column"><label class="col-form-label" for="name-input-field">Nombre</label></div>
                    <div class="col-sm-6 input-column"><input class="form-control" type="text"/></div>
                </div>
                <div class="row form-group">
                    <div class="col-sm-4 label-column"><label class="col-form-label" for="email-input-field">Email </label></div>
                    <div class="col-sm-6 input-column"><input class="form-control" type="email"/></div>
                </div>
                <div class="row form-group">
                    <div class="col-sm-4 label-column"><label class="col-form-label" for="pawssword-input-field">Contraseña</label></div>
                    <div class="col-sm-6 input-column"><input class="form-control" type="password"/></div>
                </div>
                <div class="row form-group">
                    <div class="col-sm-4 label-column"><label class="col-form-label" for="repeat-pawssword-input-field">Repetir Contraseña</label></div>
                    <div class="col-sm-6 input-column"><input class="form-control" type="password"/></div>
                </div>
                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1"/><label class="form-check-label" for="formCheck-1">He leído y acepto los Términos y Condiciones, así como la Política de Privacidad de Datos</label></div><button class="btn btn-light submit-button" type="button">Submit Form</button>
            </form>
        </div>
    </div>
    )
}

export default Register
