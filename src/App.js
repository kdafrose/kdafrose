import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./components/Main";
import EditNotes from  "./components/EditNotes";


function App() {

 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path ="/" element = {<Main />}/> 
          <Route exact path ="/Edit" element = {<EditNotes />}/>
        </Routes>
    </BrowserRouter>
  
    </>
    
  )

}




