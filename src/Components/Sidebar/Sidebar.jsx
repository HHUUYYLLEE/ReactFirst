import React from 'react'
import './Sidebar.css'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Me</span>
        <img
          src='https://archives.bulbagarden.net/media/upload/thumb/0/00/Bag_Pok%C3%A9_Ball_SV_Sprite.png/60px-Bag_Pok%C3%A9_Ball_SV_Sprite.png'
          alt=''
        />
        <p>whatever it is</p>
      </div>
      <div className='sidebarItem'>Categories</div>
      <ul className='sidebarList'>
        <li className='sidebarListItem'>Life</li>
        <li className='sidebarListItem'>Music</li>
      </ul>
      <div className='sidebarItem'>Follow</div>
      <div className='sidebarSocial'>
        <i className='sidebarIcon fa-brands fa-facebook'></i>
        <i className='sidebarIcon fa-brands fa-slack'></i>
      </div>
    </div>
  )
}
