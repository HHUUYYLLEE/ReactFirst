import React from 'react'
import './Settings.css'
import Sidebar from '../../Sidebar/Sidebar'
import img from '../../../Asset/htz.png'
export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update account</span>
          <span className='settingsDeleteTitle'>Delete account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile pic</label>
          <div className='settingsPrfPic'>
            <img src={img} alt='' />
            <label htmlFor='fileInput'>
              <i className='settingsPrfPicIcon fa-regular fa-circle-user'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Huy' />
          <label>Email</label>
          <input type='email' placeholder='huy.lb194586@sis.hust.edu.vn' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
