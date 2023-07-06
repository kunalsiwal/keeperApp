import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";

import './App.css'
import AddNote from "./components/AddNote";


const App=()=>{
   

    const [notes,setNotes]=useState([])
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const [isMouseOver,setMouseOver]=useState(false)

    const handleAdding=()=>{
        let newEntry={}
        newEntry['title']=title
        newEntry['content']=content
        if(title || content){
            setNotes((prevVal)=>{
                return [...prevVal,newEntry]
            })
        }
        
        setTitle('')
        setContent('')
    }

    const handleTitleChange=(newTitle)=>{
        setTitle(newTitle)
    }

    const handleContentChange=(newContent)=>{
        setContent(newContent)
    }

    const deleteNote=(id)=>{
        let newArray=[]
        console.log('clicked',id)
        notes.forEach((element,index)=>{
            if(index!=id){
                newArray.push(element)
            }
        })
        setNotes((prevVals)=>{
            return newArray
        })
    }

    const handleMouseOver=()=>{
        setMouseOver(true)
    }

    const handleMouseOut=()=>{
        setMouseOver(false)
    }

    return <div>
        <Header />
        <div className="add">
        <AddNote className='add-note' title={title} content={content} handleTitleChange={handleTitleChange} handleContentChange={handleContentChange}/>
        <button style={isMouseOver?{'backgroundColor':'grey','opacity':'70%'}:null} className="add-button" onClick={handleAdding} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Add</button>
        </div>
        
        <div className="content-div">
        {notes.map((obj,index)=>{
            return <Notes key={index} title={obj.title} content={obj.content}  deleteNote={deleteNote} id={index}/>
        })}
        
        </div>
        
        <Footer />
    </div>
}

export default App