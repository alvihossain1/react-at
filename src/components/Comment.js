import React, { useEffect, useState } from 'react'

export default function Comment (props) {

    const { comment } = props
    
    const [status, setStatus] = useState(false)
    const [dateTime, setDateTime] = useState("")

    useEffect(() => {
        if(comment.length > 0){
            setStatus(true)
            let currentDate = new Date();
            let holdDateTime = `${currentDate.getDate()}/${currentDate.getDay()}/${currentDate.getFullYear()} at ${currentDate.getHours()}:${currentDate.getMinutes()}`
            setDateTime(holdDateTime)            
        }
        else{
            setStatus(false)
        }
    }, [comment, status])



    return (
        <div style={{display: status ? "block" : "none"}}>
            <div className='w-full bg-slate-400/50 flex flex-col md:flex-row gap-3 rounded-lg p-2'>
                <div className='image'>
                    <img className='rounded-full object-cover object-center' src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80' style={{ height: "60px", width: "60px" }} alt = "comment-pic" />
                </div>
                <div className='w-full'>
                    <div className="wrap-heads">
                        <h1>Anonymous</h1>
                        <small>{dateTime}</small>
                    </div>
                    <div className='comment mt-4'>
                        <p>{comment}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
