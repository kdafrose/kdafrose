import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Main from "./components/Main";
import EditNotes from  "./components/EditNotes";
import View from "./components/View";



function App() {

  return (
    
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route exact path ="/" element = {<Main />}/> 
          <Route exact path ="/notes/:id/edit" element = {<EditNotes   />}/>
          <Route exact path = "/notes/:id" element = {<View   />}/>
        </Routes>
      </BrowserRouter>
    </>
  )

}




