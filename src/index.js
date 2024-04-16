import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import About from './Components/About';
import Home from './Components/Home';
import NotesList from './Components/NotesList';
import Features from './Components/Features';
import Support from './Components/Support';
import CreateArea from './Components/CreateArea';
import Notes from './Components/Notes';
import Login from './Components/Login';
import Signup from './Components/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/Home' element = {<Home/>} />
    <Route path='/About' element= {<About/>} />
    <Route path='/CreateArea' element= {<App/>} />
    <Route path='/Features' element = {<Features/>} />
    <Route path='/Support' element = {<Support/>} />
    <Route path='/LogIn' element = {<Login/>} />
    <Route path='/SignUp' element = {<Signup/>} />
  </Routes>
 
  <Footer />

  </BrowserRouter>
    //  <App />

);

reportWebVitals();
