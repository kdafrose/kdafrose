import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';



function Sidebar(){


    const navigate = useNavigate();
    //const {id} = useParams();
     
    //document.getElementById('.default_div').remove();
    const [idParams, setIdParams] = useState(0)
    

    function addNote(){

        setIdParams(idParams +1);
        console.log(idParams);
        if(!localStorage.getItem('notes' + idParams)){
            navigate('/notes/' + idParams+ '/edit')
        } 
        
    }

    function changeNotes(element){
        
        const idDiv = element.id;
        const slice = idDiv.slice(15,);
        console.log(slice);
        navigate('/notes/' + slice);

    }

    

    useEffect(() => {
        
        for(let i =0; i < localStorage.length; i++){
            if(localStorage.getItem('notes' + i) !== null){
                const notes = JSON.parse(localStorage.getItem('notes' + i));
        
                if(document.querySelector('note-container-' + i) == null){
                        
                    const notesSidebar = document.querySelector('.Notes_edit_column_list');
                    const newDiv = document.createElement('div');
                    newDiv.setAttribute('id', 'note-container-' + i);
                    newDiv.setAttribute('onClick', 'changeNotes(this);');
                    newDiv.onclick = function() {changeNotes(this);}
    
                
                    const sidebarTitle = document.createElement('p');
                    sidebarTitle.setAttribute('class', 'title');
                    sidebarTitle.append(notes.title);
                    newDiv.append(sidebarTitle);
                
                    const sidebarDate = document.createElement('p');
                    sidebarDate.setAttribute('class', 'date' );
                    sidebarDate.append(notes.date);
                    newDiv.append(sidebarDate);
                
                    const sidebarPreview = document.createElement('p');
                    sidebarPreview.setAttribute('class', 'preview');
                    sidebarPreview.append(notes.preview);
                    newDiv.append(sidebarPreview);
                
                    notesSidebar.appendChild(newDiv);
                        
                    }
                }
        }
        
    }, [idParams])

    return(
        <>
            <div className="Notes_column">
                <div className="Notes_nav">
                    <h3>Notes</h3>
                    <button onClick={addNote } >&#43;</button>
                </div>
                <div className="Notes_edit_column_list">
    
                </div>
            </div>
        </>
    )
}

export default Sidebar;