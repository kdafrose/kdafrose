import React from "react";
import uuid from 'react-uuid';
import { useNavigate, useParams } from 'react-router-dom';

function Main() {
    //const [title, setTitle] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    
    return (
        <>
            <div className="web_container">
                <div className="Notes_column">
                    <div className="Notes_nav">
                        <h3>Notes</h3>
                        <button onClick={() => navigate('/notes/1/edit')}>&#43;</button>
                    </div>
                    <div className="Notes_column_list">
                        <p className='Notes_column_default_msg'>No Notes Yet</p>
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