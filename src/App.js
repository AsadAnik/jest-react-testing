import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from './Components/RenderingTest/hello';
import User from "./Components/DataFetchingTest/user";
import Toggle from './Components/EventsTest/toggle';
import Card from './Components/TimersTesting/card';

// App Component..
function App() {
  // states Object..
  const state = {
      id: 1,
      name: 'Xerox A',
      age: 22,
      address: 'Washington, London',
  };

  // react hook..
  const [isLogo, setLogo] = React.useState(true);

  // making the choice throw with conditional choices..
  const makeChoice = (choice) => {
     switch (choice){
         case 1:
            console.log("1 is selected!");
            break;

         case 2:
             console.log("2 number is selected!");
             break;

         case 3:
             console.log("3 number is selected!");
             break;

         case 4:
             console.log("number 4 is for open door!");
             break;

         case 5:
             console.log("5 number for pipeline of CI-CD!");
             break;

         default:
             return null;
     }
  }


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

      {/*------ Timers testing -------*/}
      <Card onSelect={ (choice) => makeChoice(choice) } />
    </div>
  );
}

export default App;
