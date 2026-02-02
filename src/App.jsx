import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponent } from './components/HeaderComponent';
//import './App.css'
import { FooterComponent } from './components/FooterComponent';
//import ContentComponenet from './components/ContentComponenet';
import { MapDemo1 } from './components/MapDemo1';
import { MapDemo2 } from './components/MapDemo2';
import { MapDemo3 } from './components/MapDemo3';
import { MapDemo4 } from './components/MapDemo4';
import { MapDemo5 } from './components/MapDemo5';
import { MapDemo6 } from './components/MapDemo6';
import { MapDemo7 } from './components/MapDemo7';
import { MapDemo8 } from './components/MapDemo8';





function App() {
  

 
 
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <MapDemo1></MapDemo1>
      <MapDemo2></MapDemo2>
      <MapDemo3></MapDemo3>
      <MapDemo4></MapDemo4>
      <MapDemo5></MapDemo5>
      <MapDemo6></MapDemo6>
      <MapDemo7></MapDemo7>
      <MapDemo8></MapDemo8>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App
