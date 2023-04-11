import React from 'react'
import './PostDetailsContainer.css'
import Sidebar from '../../Sidebar/Sidebar'
import PostDetails from '../../PostDetails/PostDetails'
export default function BottomPart() {
  return (
    <div className='postDetailsContainer'>
      <PostDetails />
      <Sidebar />
    </div>
  )
}
