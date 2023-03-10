import React, {useEffect} from "react";
import { useNavigate, useParams,  } from 'react-router-dom';
import Sidebar from "./Sidebar";

function Main() {
    //const [title, setTitle] = useState('');
    //const navigate = useNavigate();
    //const {id} = useParams();
    
    useEffect(() => {
        

        const defaultNotes = document.createElement('p');
        defaultNotes.setAttribute('class', 'Notes_column_default_msg');
        defaultNotes.innerText='No Notes Yet';
        
        const emptyColumn = document.querySelector('.Notes_edit_column_list');
        emptyColumn.append(defaultNotes);
    });

    
    return (
        <>
            <div className="web_container">
                <Sidebar />
                <div className="Edit_column">
                    <h2 className = "default_message">Select a note, or create a new one</h2>
                </div>
            </div>       
        </>
    )
};

export default Main;