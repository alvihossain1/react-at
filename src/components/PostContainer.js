import React from 'react'
import Post from './Post'

export default function PostContainer() {
  return (
    <div className='w-4/5 mx-auto py-2'>
        <div className='flex flex-col text-white'>
            <Post />       
            <Post />       
            <Post />        
        </div>
    </div>
  )
}
