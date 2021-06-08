import React, { Component } from 'react';
import './FeaturesPage.css';
import brain from '../images/brain.png';
import counselor from '../images/counselor.png';
import appointment from '../images/appointment.png';

class FeaturesPage extends Component {
    render() {
        return (
            <div>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content />
                <meta name="author" content="Yifan Lou" />
                <title>Features</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
                <link href="FeaturesPage.css" rel="stylesheet" />
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a href='/' className="navbar-brand d-flex align-items-center">
                            <strong>Let's Talk</strong>
                        </a>
                        <nav className="nav nav-masthead justify-content-center float-md-end">
                            <a href='/' className="nav-link active" aria-current="page"><span style={{ fontSize: '18px' }}>Home</span></a>
                            <a href='login' className="nav-link active"><span style={{ fontSize: '18px' }}>Login</span></a>
                            <a href='signup' className="nav-link active"><span style={{ fontSize: '18px' }}>Sign Up</span></a>
                        </nav>
                    </div>
                </div>
                <main>
                    <section className="py-5 text-center container">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light">Features</h1>
                                <p className="lead text-muted"> Some of our featuring services. </p>
                            </div>
                        </div>
                    </section>
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div className="col">
                                    <div className="card shadow-sm"> <img className="card-img-top" src={brain} width={300} height={360} />
                                        <div className="card-body">
                                            <h5 className="card-title">Mental Health</h5>
                                            <p className="card-text"> Mental illness is important at all stages of life. Click to view more information about how mental health can seriously affect your daily life. </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href='info' className="nav-link active"><span style={{ fontSize: '18px' }}>View</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-sm"> <img className="card-img-top" src={counselor} width={300} height={360} />
                                        <div className="card-body">
                                            <h5 className="card-title">Our Counselors</h5>
                                            <p className="card-text"> Our expert, skilled counselor are here to help with your mental illness issues. Click to view our counselors availability. </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href='counselor' className="nav-link active"><span style={{ fontSize: '18px' }}>View</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card shadow-sm"> <img className="card-img-top" src={appointment} width={300} height={360} />
                                        <div className="card-body">
                                            <h5 className="card-title">Schedule Appointment</h5>
                                            <p className="card-text"> Schedule a online chat session or in-personal appointment with our counselors at your convience. Click to learn more. </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href='contact' className="nav-link active"><span style={{ fontSize: '18px' }}>View</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default FeaturesPage;