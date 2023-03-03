import React, { createContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import uuid from 'react-uuid';
//import Main from "./Main";
//import { BrowserRouter } from "react-router-dom";

//<ReactQuill theme="snow" value={value} onChange={setValue} />;


function EditNotes() {

    
    //access the parameters
    const {id}  = useParams();

    // value for users notes
    const [value, setValue] = useState('');

    // create random id's
    const unique_id = uuid();
    
    useEffect( () => {
        const generated_id = (unique_id.slice(0,6));
        const Notes_list = document.querySelector('.Notes_edit_column_list');

        const new_note_container = document.createElement('div');
        new_note_container.setAttribute('id',generated_id);
        //new_note.append(generated_id); 
        // will be saved once hit Save
        Notes_list.append(new_note_container);
        const inputTitle = document.createElement('p');
        inputTitle.setAttribute('id', id); 
        new_note_container.append(inputTitle);

        // localStorage for generated_id and the param number 
        // so when refreshed 
    
    }, [id]) 
    
    

    // user defined notes title
    const [title, setTitle] = useState('Untitled');
    const changeTitle = (evt) => {
        setTitle(evt.target.value);
        

    }


    function saveTitle(){
        document.getElementById(id).append(title);
    }

    // for the Date of the notes
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
            return "";
        }
        return formatted;
    };


    return(
        <>
            <div className="web_container" >
                <div className="Notes_column">
                    <div className="Notes_nav">
                        <h3>Notes</h3>
                        <button>&#43;</button>
                    </div>
                    <div className="Notes_edit_column_list"> 
                        
                    </div>
                </div>
                <div className="Edit_column">
                    <div className='Edit_nav'>
                        <div className='Title_nav'>
                            < input type = 'text' className='Title' placeholder = {title} onChange = {changeTitle} />
                            <div className='Title_nav_date'><input className='Date_button' onClick = {formatDate} type="datetime-local" /></div>
                        </div>
                        
                        <div className='Title_buttons_nav'>
                            <button className='Save_button' onClick={saveTitle} >Save</button>
                            <button className='Delete_button'>Delete</button> 
                        </div>
                    </div>
                    
                    <div className='Editor' >
                        <ReactQuill style={{ height: 700 }} theme="snow" value={value} onChange={setValue}  placeholder = "Your Notes Here..."/>
                    </div>
                </div>
            </div>       
        </>
    )
    
    
   
}

export default EditNotes;
