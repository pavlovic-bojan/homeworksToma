import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';

function App() {
  let ime = "Bojan"
  let color = { color: 'yellow' }
  return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
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
            <p>Pozdrav ja se zovem {ime}</p>
            <p style={color}>Ovo je moji prvi react app</p>
            <Products pdv = '20' />
          </header>
        </div>
      </>
  );
}

export default App;
