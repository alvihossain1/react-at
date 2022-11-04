import React, { useEffect, useRef, useState } from 'react'
import Comment from './Comment'

export default function Post() {

    const [status, setStatus] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus pariatur cum repellendus ab dignissimos, eum commodi, est repudiandae et repellat quia? Ipsum mollitia omnis dignissimos? Quas rem eveniet laborum non. Odio aliquam architecto distinctio labore non maiores quia, qui illum.")
    const [edit, setEdit] = useState(false)
    const [editStatus, setEditStatus] = useState(status)
    const [commentTyping, setCommentTyping] = useState("")
    const [comment, setComment] = useState("")
    const [clickOptions, setClickOptions] = useState(false)

    const statusRef = useRef(null)
    const focusTextArea = useRef(null)

    useEffect(() => {

    }, [statusRef])


    const handleEdit = (status) => {
        console.log(status)
        setClickOptions(false)
        setEdit(true)
        focusTextArea.current.focus();
    }


    const handleEditSubmit = () => {
        if(editStatus.length === 0){
            return
        }
        else{
            setStatus(editStatus)
            setEdit(false)
        }
        
    }

    const handleDelete = () => {
        // setPost(false)
        setClickOptions(false)
        statusRef.current.remove()
    }

    return (
        <div>
            <div className="post bg-slate-900/75 flex flex-col md:flex-row rounded-lg p-2 relative my-2" ref={statusRef} style={{zIndex: "1"}}>
                
                <div className='icon text-white absolute right-3 top-2'>
                    <i className="fa-sharp fa-solid fa-bars hover:text-pink-500 transition duration-300 cursor-pointer ease" onClick={() => {setClickOptions(!clickOptions)}}></i>
                    <div className='absolute bg-black text-white right-0 px-2 py-3 rounded-lg' style={{width: "150px", display: clickOptions ? "block" : "none"}}>
                        <ul>
                            <li><p className="hover:text-pink-500 transition duration-300 ease cursor-pointer" onClick={() => handleEdit(status)}>Edit</p></li>
                            <li><p className="hover:text-pink-500 transition duration-300 ease cursor-pointer" onClick={handleDelete}>Delete</p></li>                        
                        </ul>
                    </div>
                </div>

                <div className="mr-3">
                    <img className='rounded-full' style={{ maxWidth: "80px" }} src='https://img.freepik.com/premium-vector/eagle-logo-design-vector_179537-62.jpg?w=826' alt='holder pic' />
                </div>

                <div className="flex flex-col gap-5 w-full">
                    <div className="w-full">
                        <div className="wrap-heads">
                            <h1>Anonymous</h1>
                            <small>10/07/22 at 4:30pm</small>
                        </div>
                        <div className="text mt-3 w-4/5">
                            <p style={{display: edit ? "none" : ""}} className='status-tag'>{status}</p>
                            <div className='w-full text-black' style={{display: edit ? "block" : "none"}}>
                                <textarea className='edit resize-none block w-full bg-slate-500 px-2 py-1.5 text-white rounded-lg outline-none border-2 border-slate-500 focus:border-pink-500 caret-pink-500' style={{minHeight: "5rem"}} onChange={(e) => {setEditStatus(e.target.value)}} defaultValue={status} ref={focusTextArea} /*onKeyPress={(e) => {if(e.key === "Enter"){handleEditSubmit()}}}*//>
                                <button className="hover:text-pink-500 transition duration-300 ease text-white" onClick={handleEditSubmit}><p>Submit</p></button>
                            </div>
                        </div>
                    </div>
                    <div className="button-group mr-auto flex justify-end gap-3" style={{ width: "90%" }}>
                        
                    </div>
                    <div className="button-group gap-3 block">
                        <textarea className="comment resize-none block w-full bg-slate-500 px-2 py-1.5 text-white rounded-lg outline-none border-2 border-slate-500 focus:border-pink-500 caret-pink-500" style={{minHeight: "3rem", width: "90%"}} placeholder="type a comment..." onChange={(e) => {setCommentTyping(e.target.value)}}/>
                        <button className="block hover:text-pink-500 transition duration-300 ease" onClick={() => {setComment(commentTyping)}}><p>Submit comment</p></button>
                    </div>
                    

                    <div className='comment w-full' style={{width: "90%"}}>
                        <Comment comment = {comment} />
                    </div>


                </div>
            </div>






                
        </div>
    )
}
