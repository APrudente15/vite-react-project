import React from 'react'
import { CommentItem } from '../CommentItem'


export default function commentList({comment}) {
  return (
    <div className = "commentContainer">
        <ul className ="commentList"> {comment.map((comments,i) => {
            return (
                <CommentItem comments = {comments} key = {i}/>
            )
        })}</ul>
    </div>
  )
}
