import React from 'react'
import NavBar from "./Components/NavBar/NavBar";
import {originals , action, comedy} from './urls'
import "./App.css";
import { Banner } from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div>
    <NavBar />
    <Banner />
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={comedy} title='Comedy Movies' isSmall/>
    </div>
  );
}

export default App;
