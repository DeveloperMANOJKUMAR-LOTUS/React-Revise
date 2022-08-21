import logo from './logo.svg';
import './App.css';
import FuncComp from './components/FuncComp';
import Cls from './components/Cls';
import BrowRouter from './components/Router/BrowRouter';

function App() {
  return (
    <div className="App">
      <FuncComp></FuncComp>
      <Cls></Cls>
      <BrowRouter></BrowRouter>
    </div>
  );
}

export default App;
