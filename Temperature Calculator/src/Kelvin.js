import React, { Component } from 'react';
import "./App.css";

class Kelvin extends Component {
    render() {
        return (
            <div>
                <h4 className='textemp'>Kelvin: {this.props.derecefag} °K</h4>                
            </div>
        );
    }
}

export default Kelvin;