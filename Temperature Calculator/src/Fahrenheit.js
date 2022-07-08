import React, { Component } from 'react';
import "./App.css";

class Fahrenheit extends Component {
    render() {
        return (
            <div>
                <h4 className='textemp'>Fahrenheit: {this.props.derecefag} °F</h4>                
            </div>
        );
    }
}

export default Fahrenheit;