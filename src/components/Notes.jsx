import React, { useState } from "react";
import './NoteStyling.css'
import DeleteIcon from '@mui/icons-material/Delete';
function Notes(props){
    const [isMouseOver,setMouseOver]=useState(false)
    return(
        <div className="note">
            <div className="note-content">
                <h3 className="note-heading">{props.title}</h3>
                <p className="note-content">{props.content}</p>
            </div>
            
            <button style={isMouseOver?{'color':'grey','opacity':'70%'}:null} className="delete-button" id={props.id} onMouseOver={()=>{
                setMouseOver(true)
            }}
            onMouseOut={()=>{
                setMouseOver(false)
            }}
             onClick={(e)=>{
                let id=e.target.id
                props.deleteNote(id)
            }}> <DeleteIcon /></button>
        </div>
    )
}
export default Notes