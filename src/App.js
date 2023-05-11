import {useState} from 'react'
import logo from './logo.svg';
import User from "./components/User"



import './App.css';
import Customer from './pages/Customer';
import Admin from './pages/Admin';

function App() {

  
  return (
    <div className="App" >
       <Customer />
       <Admin/>
    </div>
  );
}

export default App;
