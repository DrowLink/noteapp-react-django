import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

const NotePage = ( ) => {

    const  { id }  = useParams();
    let [note, setNote] = useState(null)

     useEffect(() => {
         getNote()
     }, [id])

     let getNote = async () => {
         let response = await fetch(`/api/notes/${id}/`)
         let data = await response.json()
         setNote(data)
     }

  return (
    <div>
        {/* "?" is a kind of exception that avoids an error when the var value is empty it wont do anything. but if var has something will do whatever it says  */}
        <p>{note?.body}</p>
    </div>
  )
}

export default NotePage