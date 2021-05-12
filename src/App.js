import logo from './logo.svg';
import './App.css';
import Home from './Components/RenderingTest/hello';
import User from "./Components/DataFetchingTest/user";

// App Component..
function App() {

  const state = {
      id: 1,
      name: 'Xerox A',
      age: 22,
      address: 'Washington, London'
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

      {/*------ Home Component to testing -----*/}
      <Home {...state} />

      {/*------ User Component to testing -----*/}
      <User {...state} />
    </div>
  );
}

export default App;
