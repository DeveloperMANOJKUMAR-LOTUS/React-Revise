import logo from './logo.svg';
import './App.css';
import FuncComp from './components/FuncComp';
import Cls from './components/Cls';

import { Link } from 'react-router-dom';
import Button from './components/sendData/Button';
import ButtonProp from './components/sendData/ButtonProp';
import Construct from './components/constructor/Construct';
import Post from './components/constructor/Post';


function App() {
  return (
    <div className="App">
      {/* <FuncComp></FuncComp>
      <Cls></Cls> */}
      {/* <Button content="Hello World content"></Button>
      <ButtonProp content="This is a button prop Example"></ButtonProp> */}

      {/* <Construct ></Construct> */}
      <Post />

    </div>
  );
}

export default App;
