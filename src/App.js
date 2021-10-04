import './App.css';
import Weather from './Weather';
import Coder from './Coder';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lyon"/>
      </div>
      <Coder />
    </div>
  );
}

export default App;
