import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <section className="login-clean">
        <form method="post">
            <h2 className="visually-hidden">Login Form</h2>
            <div className="illustration"><i className="icon ion-android-boat"></i></div>
            <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email"/></div>
            <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password"/></div>
            <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Log In</button></div><Link className="forgot" to="/">Forgot your email or password?</Link>
        </form>
    </section>
    )
}

export default Login
