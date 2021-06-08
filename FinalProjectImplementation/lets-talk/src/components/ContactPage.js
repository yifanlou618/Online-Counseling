import React, { Component } from 'react';
import './InfoPage.css';

class ContactPage extends Component {
    render() {
        var left = 390 + 'px';
        var top = 0 + 'px';
        return (
            <div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
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
                    <div>
                        <ul style={{ left: '10px', top: '200px', position: 'absolute' }}>
                            <li>Phone number: (240)888-7958</li>
                            <li>Email: louyifan0618@letstalk.com</li>
                            <li>instagram: letstalkrightnow</li>
                            <li>facebook: letstalk</li>
                            <li>Twitter: letstalk</li>
                            <li>Address: 3020 Clarksburg Park Rd. Yuma, AZ, 85365</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage;