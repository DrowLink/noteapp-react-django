import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Navigate } from "react-router-dom";

const NotePage = ({ history }) => {

    const  { id }  = useParams();
    let [note, setNote] = useState(null)

     useEffect(() => {
         getNote()
     }, [id])

     let getNote = async () => {
        if (id === 'new') return 
         let response = await fetch(`/api/notes/${id}/`)
         let data = await response.json()
         setNote(data)
     }

     let createNote = async () => {
        fetch(`/api/notes/create`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
     }


     let updateNote = async () => {
        fetch(`/api/notes/${id}/update/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(note)
        })
     }

     let deleteNote = async () => {
        fetch(`/api/notes/${id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.replace("/")
     }

     let handleSubmit = () => {
        if (id !== 'new' && !note.body){ //avoiding null existing notes.
            deleteNote();
        } else if ( id !== 'new'){
            updateNote()
        }else if (id == 'new' && note !== null){
            createNote()
        }
        window.location.replace("/")
     }

  return (
    <div className='note'>
        {/* "?" is a kind of exception that avoids an error when the var value is empty it wont do anything. but if var has something will do whatever it says  */}
        <div className='note-header'>
            <h3>
                 <ArrowLeft onClick={handleSubmit} />
            </h3>
            {id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
        </div>
        <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage