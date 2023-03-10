import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import uuid from 'react-uuid';
import Sidebar from './Sidebar';



// id = params, are used to id the actual notes of the users' notes with id => "paragraph-{id}"
// generated_id = are used to id the paragraph divs in the notes column

// when plus button pressed the plus button, increase the id by 1
// generate a new id and reload the EditNotes.js
// When click 'Save' move the the View.js 
    // the notes column list should be saved by props?
    // 
    
function EditNotes() {

    const navigate = useNavigate();
    //access the parameters
    const {id}  = useParams();

    // value for user input notes title
    const [title, setTitle] = useState('Untitled');
    const changeTitle = (evt) => {
        setTitle(evt.target.value);
        //use props for the Sidebar
    }

     // value for users notes
     const [value, setValue] = useState('');
     const edit = (evt) => {
         setValue(evt.target.value);
         console.log(value);
    }

    // creating div for the notes preview
    const [notes, setNote] = useState([]);

     //saving the inputted date into a formatted string
     function getDate() {
        //retrieve the date from user input 
        const inputDate = document.querySelector('.Date_button').value;
        let am_pm = "AM"
        let year = inputDate.slice(0,4);
        let day = inputDate.slice(8,10);
        let month = inputDate.slice(5,7);
        let time = inputDate.slice(11, );
    

        if(time){
            let hour = parseInt(time.slice(0,3));
            if(hour < 12) {am_pm = am_pm + ""}
            else { 
                am_pm = "PM"
                hour -= 12;
                time = hour.toString() + time.slice(2, );
            }
        }

        if(month){
            const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let monthIndex = parseInt(month) -1;
            month = monthList[monthIndex];
        }

        const formattedDate = month + " " + day + ", " + year + " at " + time + " " + am_pm;
       
        //document.querySelector('.date').append(formattedDate);

        return formattedDate;

    }

    function getContent(){
        const notes = document.querySelector('.Input_notes').innerText;
        return notes;

    }

    
  
    useEffect( () => {
            
        const notesColumn = document.querySelector('.Notes_edit_column_list');
        const defaultDiv = document.createElement('div');
        const defaultPreview = document.createElement('p');
        defaultPreview.append('...');

        defaultDiv.append('Untitled');
        defaultDiv.append(defaultPreview);
        defaultDiv.setAttribute('class', 'default_div');
        notesColumn.append(defaultDiv);
        
    }, [id]) 

 
    function getPreview(){
        const inputNotes = document.querySelector('.Input_notes').innerText;
        var preview;

        if(inputNotes.length > 200){
            preview = inputNotes.slice(0,130) + "...";
        }

        else{preview = inputNotes + "";}

        return preview;
    }

    function saveToStorage(){
        
        const newNotes = {

            'id': uuid().slice(0,6),
    
            'title': title,
    
            'content': getContent(),
    
            'preview': getPreview(),
    
            'date': getDate()
        };  

        setNote((prevArray) => [...prevArray, newNotes]);
        notes.forEach((item) => {
            //how to access each notes
            console.log(item);
        })

        localStorage.setItem('notes' + id, JSON.stringify(newNotes));
        //setIdParams(idParams + 1);
        if(localStorage.getItem('notes' + id) !== null){
            navigate('/notes/' + id);
        }

        
        
    }

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
                <Sidebar notes = {notes}/>

                <div className="Edit_column">
                    <div className='Edit_nav'>
                        <div className='Title_nav'>
                            < input type = 'text' className='Title' placeholder = {title} onChange = {changeTitle} />
                            <div className='Title_nav_date'><input className='Date_button' type="datetime-local"  onClick = {formatDate}/></div>
                        </div>
                        
                        <div className='Title_buttons_nav'>
                            <button className='Save_button' onClick= {saveToStorage} >Save</button>
                            <button className='Delete_button' onClick={deleteNotes}>Delete</button> 
                        </div>
                    </div>
                    <div className='Editor' >
                        <ReactQuill className = "Input_notes" style={{ height: 700 }} theme="snow"  onChange={edit}  placeholder = "Your Notes Here..."/>
                    </div>
                </div>
            </div>      
                  
        </>
    )
}

export default EditNotes;
