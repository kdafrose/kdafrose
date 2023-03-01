import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import EditNotes from './components/EditNotes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // This renders the DOM element with the element ID or root, which was the div element 
root.render(
  <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route exacpt path = "/" element = {<Main />}/>
          <Route exact path ="/Edit" element = {<EditNotes />}/>
        </Routes>
    </BrowserRouter>
  
    </>
);

// path= "/" the default page
// path = "/Edit" the page where user can add more notes

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
