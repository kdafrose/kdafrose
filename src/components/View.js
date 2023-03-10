import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import 'react-quill/dist/quill.snow.css';

function View() {

    const {id} = useParams();
    const notes= JSON.parse(localStorage.getItem('notes'+id));
    const navigate = useNavigate();
    
    function deleteNotes(){
        const answer = window.confirm("Are you sure?");
        if (answer) {
            // delete from the local storage
            localStorage.removeItem('notes' +id);
            // delete from the notes sidebar
            const noteDiv = document.querySelector('#note-container-' + id);
            noteDiv.remove();
            //setIdParams(idParams -1);
    
            if(!document.querySelector('.Notes_edit_column_list').hasChildNodes()){
                navigate('/');
            }
        }
    
      }

      function editNotes(){
        navigate('/notes/' + id + '/edit');
      }
    

    return(
        <>
            <div className="web_container" >
                <Sidebar />
                <div className="View_column">
                    <div className='Edit_nav'>
                        <div className='Title_display_nav'>
                            < div className='Notes_display_title'>{notes.title}</div>
                            <div className='Title_display_nav_date'>{notes.date}</div>
                        </div>
                        
                        <div className='Title_buttons_nav'>
                            <button className='Save_button' onClick={editNotes}>Edit</button>
                            <button className='Delete_button' onClick={deleteNotes}>Delete</button> 
                        </div>
                    </div>
                    <div className='notes_display'>
                        <div className='notes'>{notes.content}</div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default View;