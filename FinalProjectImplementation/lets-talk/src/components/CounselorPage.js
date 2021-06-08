import React, { Component } from 'react';
import './CounselorPage.css';

class CounselorPage extends Component {
    constructor() {
        super();
        this.state = {
            counselor: [],
            /*tempName: "",
            tempPhone: "",
            tempEmail: "",
            tempPrice: "",
            tempYear: 0*/
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/counselor')
            .then(res => res.json())
            .then(data => {
                this.setState( (prevState) => { return { counselor: data.info } })
            });
    }

    /*postData(event) {
        event.preventDefault();
        let data = { name: this.state.tempName, phone: this.state.tempPhone, email: this.state.tempEmail, price: this.state.tempPrice, year: this.state.tempYear };
        let options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('http://localhost:3001/counselor/', options).then();
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }*/

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
                        <ul style={{ left: '10px', top: '170px', position: 'absolute' }}>
                            {this.state.counselor.map((counselors) =>
                                <li><span style={{ color: 'black' }}>Dr. {counselors.name}, {counselors.phone}, {counselors.email}, {counselors.price}</span></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CounselorPage;