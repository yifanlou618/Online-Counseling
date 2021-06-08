import React, { Component } from 'react';

class ModifyPage extends Component {
    constructor() {
        super();
        this.state = {
            counselor: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/modify/')
            .then(res => res.json())
            .then(data => {
                this.setState((prevState) => { return { counselor: data.info } })
            });
    }
}