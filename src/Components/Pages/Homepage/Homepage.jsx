import React from 'react'
import './Homepage.css'
import Header from '../../Header/Header'
import Sidebar from '../../Sidebar/Sidebar'
import PostsList from '../../Posts list/PostsList'

export default function Homepage() {
  return (
    <>
      <Header />
      <div className='homepage'>
        <PostsList />
        <Sidebar />
      </div>
    </>
  )
}
