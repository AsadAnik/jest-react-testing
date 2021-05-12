import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from './Components/RenderingTest/hello';
import User from "./Components/DataFetchingTest/user";
import Toggle from './Components/EventsTest/toggle';

// App Component..
function App() {

  const state = {
      id: 1,
      name: 'Xerox A',
      age: 22,
      address: 'Washington, London',
  };

  // react hook..
  const [isLogo, setLogo] = React.useState(true);


  // returning statement..
  return (
    <div className="App">
      <header className="App-header">
          {isLogo && <img src={logo} className="App-logo" alt="logo" />}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/*------ Render testing -----*/}
      <Home {...state} />

      {/*------ Data Fetch testing -----*/}
      <User {...state} />

      {/*------ Events testing -------*/}
      <Toggle onChange={ (state) => setLogo(state) } />
    </div>
  );
}

export default App;
