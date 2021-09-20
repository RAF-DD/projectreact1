import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Button from "react-bootstrap/Button";


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form>
  <label>
    LOGIN:
    <input type="text" name="name" />
  </label>
</form>
<form>
  <label>
    MOT DE PASS:
    <input type="text" name="name" />
  </label>
</form>
<form>
  <label>
    FIRST NAME:
    <input type="text" name="name" />
  </label>
</form>
<form>
  <label>
    LAST NAME:
    <input type="text" name="name" />
  </label>
</form><form>
  <label>
    AGE:
    <input type="text" name="name" />
  </label>
</form>
<form>
  <label>
    ADRESS:
    <input type="text" name="name" />
  </label>
</form>
        <Button variant="primary">AJOUTER!</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
