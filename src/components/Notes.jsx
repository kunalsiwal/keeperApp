import React from "react";
import './NoteStyling.css'
function Notes(props){
    return(
        <div className="note">
            <div className="note-content">
                <h3 className="note-heading">{props.title}</h3>
                <p className="note-content">{props.content}</p>
            </div>
            
            <button className="delete-button" id={props.id} onClick={(e)=>{
                let id=e.target.id
                props.deleteNote(id)
            }}> DELETE</button>
        </div>
    )
}
export default Notes