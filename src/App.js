import logo from './logo.svg';
import './App.css';
import FuncComp from './components/FuncComp';
import Cls from './components/Cls';

import { Link } from 'react-router-dom';
import Button from './components/sendData/Button';
import ButtonProp from './components/sendData/ButtonProp';
import Construct from './components/constructor/Construct';
import Post from './components/constructor/Post';
import Header from './components/Header';
import TradiRoute from './components/Router/TradiRoute';
import Alert from './components/Bootstrap/Alert';
import Accordian from './components/Bootstrap/Accordian';


function App() {
  return (
    <div >
      {/* <FuncComp></FuncComp>
      <Cls></Cls> */}
      {/* <Button content="Hello World content"></Button>
      <ButtonProp content="This is a button prop Example"></ButtonProp> */}

      {/* <Construct ></Construct> */}
      {/* <Header />
      <Post />

      <TradiRoute /> */}
      {/* BOOTSTRAP COMPONENTS ...
      <Alert />

       */}
       <Accordian />
       <Alert />
      
    </div>
  );
}

export default App;
