import React from 'react'
import './PostDetails.css'
export default function PostDetails() {
  return (
    <div className='postDetails'>
      <div className='singlePostWrapper'>
        <img
          src='https://archives.bulbagarden.net/media/upload/thumb/5/55/Bag_Ultra_Ball_SV_Sprite.png/60px-Bag_Ultra_Ball_SV_Sprite.png'
          alt=''
          className='postDetailsImg'
        />
        <h1 className='postDetailsTitle'>
          Post Title
          <div className='postDetailsEdit'>
            <i className='postDetailsIcon fa-regular fa-pen-to-square'></i>
            <i className='postDetailsIcon fa-regular fa-trash-can'></i>{' '}
          </div>
        </h1>
        <div className='postDetailsInfo'>
          <span className='postDetailsAuthor'>
            Author: <b>Huy</b>
          </span>
          <span className='postDetailsDate'>An hour ago</span>
        </div>
        <p className='postDetailsDescription'>
          Post DescriptionPost DescriptionPost DescriptionPost DescriptionPost DescriptionPost DescriptionPost
          DescriptionPost DescriptionPost DescriptionPost Description
        </p>
      </div>
    </div>
  )
}
