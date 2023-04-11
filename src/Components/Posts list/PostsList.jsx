import React from 'react'
import './PostsList.css'
import { Post1, Post2, Post3, Post4, Post5, Post6 } from '../Post/Post'
export default function Posts() {
  return (
    <div className='postsList'>
      <Post1 />
      <Post2 />
      <Post3 />
      <Post4 />
      <Post5 />
      <Post6 />
    </div>
  )
}
