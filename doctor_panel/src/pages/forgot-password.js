import React from "react";
import { Link } from "react-router-dom";

import bg1 from '../assets/images/bg/bg-lines-one.png'
import logoDark from '../assets/images/logo-dark.png'

import {FiHome } from '../assets/icons/vander'

export default function ForgotPassword(){
    return(
        <>
        <div className="back-to-home rounded d-none d-sm-block">
            <Link to="/" className="btn btn-icon btn-primary"><FiHome className="icons"/></Link>
        </div>

        
        <section className="bg-home d-flex bg-light align-items-center" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <img src={logoDark} height="22" className="mx-auto d-block" alt=""/>
                        <div className="card login-page shadow mt-4 rounded border-0">
                            <div className="card-body">
                                <h4 className="text-center">Recover Account</h4>  
                                <form className="login-form mt-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p className="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>
                                            <div className="mb-3">
                                                <label className="form-label">Email address <span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" placeholder="Enter Your Email Address" name="email" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="d-grid">
                                                <button className="btn btn-primary">Send</button>
                                            </div>
                                        </div>
                                        <div className="mx-auto">
                                            <p className="mb-0 mt-3"><small className="text-dark me-2">Remember your password ?</small> <Link to="/login" className="text-dark h6 mb-0">Sign in</Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </section>
        </>
    )
}