import './App.css';
import Products from './Components/Products';

function App() {
  let ime = "Bojan"
  let color = { color: 'yellow' }
  return (
      <>
        <div className="App">
            <Products pdv = '20' />
        </div>
      </>
  );
}

export default App;
