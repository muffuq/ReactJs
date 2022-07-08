import React, { Component } from 'react';
import "./App.css";

class Celcius extends Component {
    render() {
        return (
            <div>
                <h4 className='textemp'>Celcius: {this.props.derecefag} °C</h4>                
            </div>
        );
    }
}

export default Celcius;