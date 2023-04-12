import React from 'react'
import './Sidebar.css'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>モンスターボール</span>
        <img
          src='https://archives.bulbagarden.net/media/upload/thumb/0/00/Bag_Pok%C3%A9_Ball_SV_Sprite.png/60px-Bag_Pok%C3%A9_Ball_SV_Sprite.png'
          alt=''
        />
        <p className='sidebarDescription'>ポケモンをつかまえるためのどうぐ</p>
      </div>
      <div className='sidebarTitle'>カテゴリー</div>
      <ul className='sidebarList'>
        <li className='sidebarListItem'>ポケモン</li>
        <li className='sidebarListItem'>ゲーム</li>
      </ul>
      <div className='sidebarItem'>Follow</div>
      <div className='sidebarSocial'>
        <a href='https://www.facebook.com/huy.leba.75'>
          <i className='topIcon fa-brands fa-facebook'></i>
        </a>
        <a href='https://app.slack.com/client/T02QFU9TCTD/C04U8AAREKV'>
          <i className='topIcon fa-brands fa-slack'></i>
        </a>
      </div>
    </div>
  )
}
