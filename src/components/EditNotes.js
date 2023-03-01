import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
//import Main from "./Main";
//import { BrowserRouter } from "react-router-dom";

//<ReactQuill theme="snow" value={value} onChange={setValue} />;


function EditNotes() {
    

    const [value, setValue] = useState('');

  

    return(
        <>
            <div className="web_container">
                <div className="Notes_column">
                    <div className="Notes_nav">
                        <h3>Notes</h3>
                        <button >&#43;</button>
                    </div>
                    <div className="Notes_column_list">
                        
                    </div>
                </div>
                <div className="Edit_column">
                    <div className='Title_nav'>
                        <h2 className='Title'> Notes Title</h2>
                        <div className='Title_buttons_nav'>
                            <button className='Save_button'>Save</button>
                            <button className='Delete_button'>Delete</button>
                        </div>
                        
                    </div>
                    <div className='Editor' >
                        <ReactQuill style={{ height: 700 }} theme="snow" value={value} onChange={setValue}  placeholder = "Write Your Notes..."/>
                    </div>
                </div>
            </div>       
        </>
    )
    
    
   
}

export default EditNotes;
