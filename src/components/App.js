import React from 'react'; 
import Header from './Header';
import Addcontact from "./Addcontact";
import Contactlist from './Contactlist';
import './App.css';

function App() {
  return (
    <div>
        <Header/>   
        <br></br>
        <br></br>
        <Addcontact/>
        {/* <Contactlist/>     */}
    </div>
  );
}


export default App;
