import logo from './logo.svg';
import './App.css';
import FuncComp from './components/FuncComp';
import Cls from './components/Cls';
import BrowRouter from './components/Router/BrowRouter';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <FuncComp></FuncComp>
      <Cls></Cls>
     
      {/* <BrowRouter></BrowRouter> */}
      <Link to="Home">Home</Link>
     
    </div>
  );
}

export default App;
