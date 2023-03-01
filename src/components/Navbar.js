//import React, { useState } from "react";
//import {Link, useState} from "react-router-dom";
// const [state, setState] = useState( Better to run a function for complex calculations)
// this will make the function run once, instead of calling a function to call that specific function
// ex) useState(() => functionName())



// useState for the user input title name of notes
// useNavigate for the the added new notes, where we can see through the routes if we are in save/delete/edit
// local Storage for the added new notes, so theyre not lose when we add new notes
// use the uuid for the generated id's when user adds a new note
// 




function Navbar (){

    function minimizeColumn() {
        const notes_column = document.querySelector('.Notes_column');
        const notes_nav = document.querySelector('.Notes_nav');
        notes_column.classList.toggle('minimize');
        notes_nav.classList.toggle('minimize');

        const main_body = document.querySelector('.Edit_column');
        main_body.classList.toggle('maximize');

    }
    
    return (
        <>
            <div className="Navbar">
                <h1 className="Navbar_title">Lotion</h1>
                <p>Like Notion, but worse.</p>
            </div>
            <div className="Menu_button"> 
                <button onClick = {minimizeColumn}>&#9776;</button>
            </div>
        </>
    )
}

export default Navbar;
