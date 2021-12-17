import React from 'react'

const RegistrarUsuarioInterno = () => {
    return (
        <div className="row register-form">
        <div className="col-md-8 offset-md-2">
            <form className="custom-form">
                <h1>Registro Usuario Interno</h1>
                <div className="row form-group">
                    <div className="col-sm-4 label-column"><label className="col-form-label" for="name-input-field">Nombre</label></div>
                    <div className="col-sm-6 input-column"><input className="form-control" type="text"/></div>
                </div>
                <div className="row form-group">
                    <div className="col-sm-4 label-column"><label className="col-form-label" for="email-input-field">Email </label></div>
                    <div className="col-sm-6 input-column"><input className="form-control" type="email"/></div>
                </div>
                <div className="row form-group">
                    <div className="col-sm-4 label-column"><label className="col-form-label" for="pawssword-input-field">Contraseña</label></div>
                    <div className="col-sm-6 input-column"><input className="form-control" type="password"/></div>
                </div>
                <div className="row form-group">
                    <div className="col-sm-4 label-column"><label className="col-form-label" for="repeat-pawssword-input-field">Repetir Contraseña</label></div>
                    <div className="col-sm-6 input-column"><input className="form-control" type="password"/></div>
                </div>
                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1"/><label className="form-check-label" for="formCheck-1">He leído y acepto los Términos y Condiciones, así como la Política de Privacidad de Datos</label></div><button className="btn btn-light submit-button" type="button">Submit Form</button>
            </form>
        </div>
    </div>
    )
}

export default RegistrarUsuarioInterno
