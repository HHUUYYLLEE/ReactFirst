import React from 'react'
import './BottomPart.css'
import Sidebar from '../../Sidebar/Sidebar'
import PostDetails from '../../PostDetails/PostDetails'
export default function BottomPart() {
  return (
    <div className='bottomPart'>
      <PostDetails />
      <Sidebar />
    </div>
  )
}
