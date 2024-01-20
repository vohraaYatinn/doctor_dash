import React from "react";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";

import { patientsData } from "../../data/data";

export default function PatientReview(){
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container-fluid"/>
        <section className="bg-dashboard">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12 d-none d-lg-block"/>

                    <div className="col-xl-9 col-lg-8 col-md-12">
                        <h5 className="mb-0">Patients Review</h5>
                        <div className="row">
                            <div className="col-xl-3 col-lg-5 col-md-5 col-12 mt-4 pt-2">
                                <div className="card p-4 border-0 shadow rounded">
                                    <div>
                                        <span className="text-primary h1 mb-0"><span className="fw-bold">4.9</span></span>
                                        <span className="h6 align-self-end ms-2">Avg. Ratings..</span>
                                    </div>

                                    <div className="mt-4">
                                        <div className="progress-box">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="title text-muted">Very satisfied</h6>
                                                <div className="progress-value d-block text-muted h6">5 Star</div></div>
                                            <div className="progress">
                                                <div className="progress-bar position-relative bg-primary" style={{width:'70%'}}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-box mt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="title text-muted">Satisfied</h6>
                                                <div className="progress-value d-block text-muted h6">4 Star</div></div>
                                            <div className="progress">
                                                <div className="progress-bar position-relative bg-primary" style={{width:'10%'}}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-box mt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="title text-muted">Neutral</h6>
                                                <div className="progress-value d-block text-muted h6">3 Star</div></div>
                                            <div className="progress">
                                                <div className="progress-bar position-relative bg-primary" style={{width:'10%'}}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-box mt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="title text-muted">Dissatisfied</h6>
                                                <div className="progress-value d-block text-muted h6">2 Star</div></div>
                                            <div className="progress">
                                                <div className="progress-bar position-relative bg-primary" style={{width:'5%'}}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-box mt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="title text-muted">Very Dissatisfied</h6>
                                                <div className="progress-value d-block text-muted h6">1 Star</div></div>
                                            <div className="progress">
                                                <div className="progress-bar position-relative bg-primary" style={{width:'5%'}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-9 col-lg-7 col-md-7 col-12 mt-4 pt-2">
                                <div className="card p-4 rounded shadow border-0">
                                    <div className="row">
                                        {patientsData.map((item, index) =>{
                                            return(
                                                <div className="col-xl-4 col-md-6 mt-4" key={index}>
                                                    <div className="text-center">
                                                        <img src={item.image} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt=""/>
                                                        <h6 className="text-primary mt-3">{item.name} <small className="text-muted">{item.title}</small></h6>
                                                        <p className="text-muted fw-normal fst-italic">{item.desc2}</p>
                                                        <ul className="list-unstyled mb-0">
                                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                            <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                            <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                            <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                            <li className="list-inline-item"><i className="mdi mdi-star-outline text-warning"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <AdminFooter/>
        <ScrollTop/>
        </>
    )
}