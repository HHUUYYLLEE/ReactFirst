import React from 'react'
import './TopBar.css'
import { Link } from 'react-router-dom'
import img from '../../Asset/htz.png'
export default function topBar() {
  document.addEventListener(
    'click',
    function () {
      document.querySelector('audio').play()
    },
    { once: true }
  )
  return (
    <div className='top'>
      <div className='topLeft'>
        <a href='https://www.facebook.com/huy.leba.75'>
          <i className='topIcon fa-brands fa-facebook'></i>
        </a>
        <a href='https://app.slack.com/client/T02QFU9TCTD/C04U8AAREKV'>
          <i className='topIcon fa-brands fa-slack'></i>
        </a>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li className='topListItem'>About</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              Write
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/settings'>
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className='topRight'>
        <img className='topImg' src={img} alt='' />
        <i className='topSearchIcon fa-brands fa-searchengin'></i>
      </div>
    </div>
  )
}
