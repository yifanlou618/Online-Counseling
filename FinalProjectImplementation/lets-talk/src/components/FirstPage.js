import React, { Component } from 'react';
import './FirstPage.css';

class FirstPage extends Component {
    render() {
        var left = 390 + 'px';
        var top = 0 + 'px';
        return (
            <div>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content />
                <meta name="author" content="Yifan Lou" />
                {/* Citation: https://getbootstrap.com/docs/5.0/examples/cover/ Author: Mark Otto, Jacob Thornton, and Bootstrap contributors.*/}
                <title>Second Prototype</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
                <link href="FirstPage.css" rel="stylesheet" />
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style={{ left: left, top: top, position: 'absolute' }}>
                    <header className="mb-auto">
                        <div>
                            <h3 className="float-md-start mb-0" style={{ color: 'white', fontWeight: 520 }}>Let's Talk</h3>
                            <nav className="nav nav-masthead justify-content-center float-md-end">
                                <a href='/' className="nav-link active" aria-current="page"><span style={{ fontSize: '18px' }}>Home</span></a>
                                <a href='login' className="nav-link active"><span style={{ fontSize: '18px' }}>Login</span></a>
                                <a href='signup' className="nav-link active"><span style={{ fontSize: '18px' }}>Sign Up</span></a>
                            </nav>
                        </div>
                    </header>
                    <main className="px-3" style={{ padding: '0px', top: top, position: 'relative', textAlign: 'center' }}>
                        <h1 style={{ color: '#202f30', fontFamily: 'Brush Script MT', fontWeight: 'bold' }}>Let's Talk</h1>
                        <p className="lead" style={{ color: '#202f30', fontWeight: 500, padding: '10px' }}>
                            <span style={{ color: 'white' }}>Let's Talk is a online counseling platform that provide service to </span>
                            students of the University of Maryland. Here you will have a chance to talk with many of our expert counselors either
                            online or schedule an appointment at your convenience.
                        </p>
                            <p className="lead"> 
                            <a href='features' className="btn btn-lg btn-secondary fw-bold border-white bg-white"><span style={{ color: 'black' }}>Learn more</span></a>
                            </p>
                    </main>
                    <footer className="mt-auto text-white-50"></footer>
                </div>
            </div>
        );
    }
}

export default FirstPage;