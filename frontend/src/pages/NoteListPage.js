import React, { useState, useEffect } from 'react'

export const NoteListPage = () => {

    let [ notes, setNotes ] = useState([])

    useEffect(() => {
        getNotes()
    }, [])


    let getNotes = async () => {
        let response = await fetch('/api/notes/')
        let data = await response.json()
        console.log('DATA: ', data)
        setNotes(data)

    }


  return (
    <div className='notes-list'>
        { notes.map((note, index) => (
           <h3 key={index}>{note.body}</h3>
        ))}
    </div>
  )
}
