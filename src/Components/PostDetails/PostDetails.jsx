import React from 'react'
import './PostDetails.css'
import { imgCase, titleCase, dateCase, descriptionCase } from './Case'

export default function PostDetails() {
  let num = parseInt(window.location.href.split('/')[4])
  return (
    <div className='postDetails'>
      <div className='postDetailsWrapper'>
        <img src={imgCase(num)} alt='' className='postDetailsImg' />
        <h1 className='postDetailsTitle'>
          {titleCase(num)}
          <div className='postDetailsEdit'>
            <i className='postDetailsIcon fa-regular fa-pen-to-square'></i>
            <i className='postDetailsIcon fa-regular fa-trash-can'></i>{' '}
          </div>
        </h1>
        <div className='postDetailsInfo'>
          <span className='postDetailsAuthor'>
            著者: <b>ＮＨＫ</b>
          </span>
          <span className='postDetailsDate'>{dateCase(num)}</span>
        </div>
        <p className='postDetailsDescription'>{descriptionCase(num)}</p>
      </div>
    </div>
  )
}
