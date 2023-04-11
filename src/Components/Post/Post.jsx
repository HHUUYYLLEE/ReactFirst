import React from 'react'
import './Post.css'
export default function Post() {
  return (
    <div className='post'>
      <img
        className='postImg'
        src='https://archives.bulbagarden.net/media/upload/thumb/5/54/Bag_Great_Ball_SV_Sprite.png/60px-Bag_Great_Ball_SV_Sprite.png'
        alt=''
      />
      <div className='postInfo'>
        <div className='postCates'>
          <span className='postCate'>Music</span>
          <span className='postCate'>Life</span>
        </div>
        <span className='postTitle'>temp post title</span>
        <hr />
        <span className='postDate'>An hour ago</span>
      </div>
      <p className='postDescription'>
        Post descriptionPost descriptionPost descriptionPost descriptionPost descriptionPost descriptionPost
        descriptionPost descriptionPost descriptionPost descriptionPost descriptionPost descriptionPost description
      </p>
    </div>
  )
}
