import React from "react";
//import { BrowserRouter } from 'react-router-dom';
//import ReactQuill from 'react-quill';
//import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';





function Main() {
    //const [title, setTitle] = useState('');
    const navigate = useNavigate();
    
    function addNote(){
       
        //Goes to the edit page 
        navigate('/Edit');


    }
    

    return (
        <>
            <div className="web_container">
                <div className="Notes_column">
                    <div className="Notes_nav">
                        <h3>Notes</h3>
                        <button onClick={addNote}>&#43;</button>
                    </div>
                    <div className="Notes_column_list">
                        <p className='Notes_column_default_msg'>No Notes yet</p>
                    </div>
                </div>
                <div className="Edit_column">
                    <h2 className = "default_message">Select a note, or create a new one</h2>
                </div>
            </div>       
        </>
    )
};

export default Main;