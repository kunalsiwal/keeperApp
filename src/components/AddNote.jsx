import React from "react";
import './AddNote.css'

const AddNote=(props)=>{

    return (
        <div style={{'backgroundColor':'white','borderRadius':'5px','marginLeft':'5px','marginRight':'5px'}}>
            <input type="text" placeholder="Title" className="add-note-title" name="addNoteTitle" value={props.title} onChange={(e)=>{
                props.handleTitleChange(e.target.value)
            }}/>
            <input type="text" name="addNoteContent" className="add-note-content" placeholder="Content" value={props.content} onChange={(e)=>{
                props.handleContentChange(e.target.value)
            }}/>
        </div>
    )
}

export default AddNote