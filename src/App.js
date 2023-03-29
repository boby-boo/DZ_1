import logo from './logo.svg';
import newLogo from './newLogo.png'

import './App.css';

const MyFunctionComponent = (props) => {
  return <h2>Hello {props.text}</h2>
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={newLogo} className="App-logo" alt="logo" />
        <h1>Hello, world!</h1>
        <MyFunctionComponent text="React"/>
      </header>
    </div>
  );
}

export default App;
