import React from 'react'

export default function commentItem({comments}) {
    console.log(comments);
  return (
    <div className='comment'>
        <span className='comment-item'>{comments.text}</span>
    </div>
  )
}
