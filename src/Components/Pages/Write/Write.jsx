import React from 'react'
import './Write.css'
export default function Write() {
  return (
    <div className='write'>
      <img
        className='writeImg'
        src='https://archives.bulbagarden.net/media/upload/thumb/a/a6/Bag_Master_Ball_SV_Sprite.png/60px-Bag_Master_Ball_SV_Sprite.png'
        alt=''
      />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fa-solid fa-plus'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input type='text' placeholder='Title' className='writeInput' autoFocus='true' />
        </div>
        <div className='writeFormGroup'>
          <textarea placeholder='Type a story...' type='text' className='writeInput writeText'></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}
