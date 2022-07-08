import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "reactstrap";
import Fahrenheit from "./Fahrenheit";
import Celcius from "./Celcius";
import Kelvin from "./Kelvin";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      derece: 0,
    };
  }
  celcius = () => {
    this.setState({ derece: this.state.derece + 1 });
  };
  fahrenheit = () => {
    this.setState({ derece: this.state.derece - this.state.derece });
  };
  kelvin = () => {
    this.setState({ derece: this.state.derece - 1 });
  };
  render() {
    return (
      <Router>
        <h2 className="sicaklikana">Sıcaklık: {this.state.derece}</h2>
        <h1 className="Baslik">Sıcaklık Hesaplayıcı</h1>
        <Button onClick={this.celcius} color="" className="celciusbt">
          🔥 Artır
        </Button>
        <Button onClick={this.fahrenheit} color="" className="celciusbt">
          ♻️ Sıfırla
        </Button>
        <Button onClick={this.kelvin} color="" className="celciusbt">
          ❄️ Azalt
        </Button>

        <nav>
          <Link to="/">Celcius</Link>
          <Link to="/kelvin">Kelvin</Link>
          <Link to="/fahrenheit">Fahrenheit</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Celcius derecefag={this.state.derece} />} />
          <Route
            path="/kelvin"
            element={<Kelvin derecefag={this.state.derece + 273.15} />}
          />
          <Route
            path="/fahrenheit"
            element={<Fahrenheit derecefag={this.state.derece * 1.8 + 32} />}
          />
        </Routes>
      </Router>
    );
  }
}

// Developed by muffuq