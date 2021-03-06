import React from 'react'
import {Link} from "react-router-dom";
import {useForm} from 'react-hook-form'
import { useAuth } from "../../hooks/user.hook";
import './../../config';

function Login() {
const { register, handleSubmit ,formState:{errors}} = useForm();
  const auth = useAuth();
  

  const onSubmit = (data) => {
    auth.signin(data, () => {
        //<Link className="forgot" to="/"></Link>
        //window.location.reload();
        window.location.href=global.config.URL;
        //<Navigate to="/" state={{ from: location }} />
    });
  };
    return (
    <section className="login-clean">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="visually-hidden">Login Form</h2>
            <div className="illustration"><i className="icon ion-android-boat"></i></div>
            <div className="mb-3">           
                <input className="form-control" type="text" name="email" placeholder="Email" 
                {...register("email",{                    
                        required:true,                        
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,                                                           
                })}/>                                                     
                {errors.email && errors.email.type === "required" &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                {errors.email && errors.email.type === "pattern" &&  <span className="text-danger text-small d-block mb-2">Correo no permitido</span>}               
            </div>                                
            <div className="mb-3">
                <input className="form-control" type="password" name="password" placeholder="Password"
                                {...register("password",{                    
                                    required:true,                        
                                    pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/,
                                    //  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/,              
                                    maxLength:15,
                                    minLength:8                                                         
                            })}                
                />
                 {errors.pass && errors.pass.type === "required" &&<span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
                {errors.pass && errors.pass.type === "pattern" &&  <span className="text-danger text-small d-block mb-2">La contrase??a no cumple con los requisitos: M??nimo 8 car??cteres, m??ximo 15, al menos un d??gito, al menos una letra .</span>}
                {errors.pass && errors.pass.type === "maxLength" &&  <span className="text-danger text-small d-block mb-2">La contrase??a debe tener m??ximo 15 car??cteres.</span>}
                {errors.pass && errors.pass.type === "minLength" &&  <span className="text-danger text-small d-block mb-2">La contrase??a debe tener m??nimo 8 car&aacute;cteres.</span>}
            </div>
            <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Log In</button></div><Link className="forgot" to="/">Forgot your email or password?</Link>
        </form>
    </section>
    )
}
export default Login