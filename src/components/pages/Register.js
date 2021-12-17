import React from 'react'
import {useForm} from 'react-hook-form'

function Register() {
    const {register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (data) =>{
        console.log(data)       
    }
    return (
        <div className="row register-form">
        <div className="col-md-8 offset-md-2">
            <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Register User</h1>
                <div className="row form-group">
                    <div className="col-sm-4 label-column"><label className="col-form-label" for="name-input-field">Nombre</label></div>
                    <div className="col-sm-6 input-column">
                        <input className="form-control" type="text" name="name"
                         {...register("name",{                    
                            required:true,                        
                            pattern: /^[a-z ,.'-]+$/i                                                        
                        })}
                        />
                        {errors.name && errors.name.type === "required" &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                        {errors.name && errors.name.type === "pattern" &&  <span className="text-danger text-small d-block mb-2">Nombre no permitido</span>}
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-sm-4 label-column"><label className="col-form-label" for="email-input-field">Email </label></div>
                    <div className="col-sm-6 input-column">
                        <input className="form-control" type="text" name ="email"
                         {...register("email",{                    
                            required:true,                        
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,                                                           
                    })}/>                                                     
                        {errors.email && errors.email.type === "required" &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                        {errors.email && errors.email.type === "pattern" &&  <span className="text-danger text-small d-block mb-2">Correo no permitido</span>}         
                        </div>
                </div>
                <div className="row form-group">
                    <div className="col-sm-4 label-column"><label className="col-form-label" for="pawssword-input-field">Contraseña</label></div>
                    <div className="col-sm-6 input-column">
                        <input className="form-control" type="password" name = "pass"
                         {...register("pass",{                    
                            required:true,                        
                            pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/,                           
                            maxLength:15,
                            minLength:8                                                         
                    })}     
                        />
                        {errors.pass && errors.pass.type === "required" &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                        {errors.pass && errors.pass.type === "pattern" &&  <span className="text-danger text-small d-block mb-2">La contraseña no cumple con los requisitos: Mínimo 8 carácteres, máximo 15, al menos un dígito, al menos una letra .</span>}
                        {errors.pass && errors.pass.type === "maxLength" &&  <span className="text-danger text-small d-block mb-2">La contraseña debe tener máximo 15 carácteres.</span>}
                        {errors.pass && errors.pass.type === "minLength" &&  <span className="text-danger text-small d-block mb-2">La contraseña debe tener mínimo 8 car&aacute;cteres.</span>}    
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-sm-4 label-column"><label className="col-form-label" for="repeat-pawssword-input-field">Repetir Contraseña</label></div>
                    <div className="col-sm-6 input-column">
                        <input className="form-control" type="password" name="passRepeat" 
                          {...register("passRepeat",{                    
                            required:true                                                        
                            })}  
                        />                        
                        {errors.passRepeat && errors.passRepeat.type === "required" &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}                          
                    </div>
                </div>               
                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1"/><label className="form-check-label" for="formCheck-1">He leído y acepto los Términos y Condiciones, así como la Política de Privacidad de Datos</label></div><button className="btn btn-light submit-button" type="submit">Submit Form</button>
            </form>
        </div>
    </div>
          
    )
}

export default Register
