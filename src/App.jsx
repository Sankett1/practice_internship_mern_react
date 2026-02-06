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
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomeComponent } from './components/HomeComponent';
import { NetflixHome } from './components/NetflixHome';
import { NetflixShows } from './components/NetflixShows';
import { NetflixMovies } from './components/NetflixMovies';
import { Watch } from './components/Watch';
import { ErrorNotFound } from './components/ErrorNotFound';
import { TeamDetails } from './components/TeamDetails';
import { Playing } from './components/Playing';
import { UseStateDemo1 } from './components/UseStateDemo1';
import { UseStateDemo2 } from './components/UseStateDemo2';
import { UseStateDemo3 } from './components/UseStateDemo3';




function App() {
  

 
 
  return (
    <div>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/netflixhome" element={<NetflixHome/>}></Route>
        <Route path="/netflixshows" element={<NetflixShows/>}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies/>}></Route>
        <Route path="/watch/:name" element={<Watch/>}></Route>
        <Route path="/teamdetails" element={<TeamDetails/>}></Route>
        <Route path="/playing/:name" element={<Playing/>}></Route>
        <Route path="/*" element={<ErrorNotFound/>}></Route>
        <Route path="/usestatedemo1" element={<UseStateDemo1/>}></Route>
        <Route path="/usestatedemo2" element={<UseStateDemo2/>}></Route>
        <Route path="/usestatedemo3" element={<UseStateDemo3/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App
