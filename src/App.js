import logo from './logo.svg';
import './App.css';
import Navegacion from './Componentes/Navegacion';

import Cargar from './Componentes/Cargar';

function App() {
  return (
    <div className="App">
      
      <Navegacion titulo='Tarjetas' enlace4h={true}/>
      <Cargar/>

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
          Leer React
        </a>
      </header>
    </div>
  );
}

export default App;
