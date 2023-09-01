import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom';

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
    <div className='note'>
        {/* "?" is a kind of exception that avoids an error when the var value is empty it wont do anything. but if var has something will do whatever it says  */}
        <div className='note-header'>
            <h3>
            <Link to="/" >
                 <ArrowLeft />
             </Link>
            </h3>
        </div>
        <textarea defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage