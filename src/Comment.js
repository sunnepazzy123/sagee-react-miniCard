import { useState } from 'react'
import './Comment.css'
import CommentPost from './CommentPost';
import Reply from './Reply';


const Comment = ({comment}) => {
  const [toggleReplies, SetToggleReplies]= useState(false)
  const [togglePostComment, SetTogglePostComment]= useState(false)


  const toggleReply = () => {
    SetToggleReplies(!toggleReplies)
  }

  const togglePost = () => {
    SetTogglePostComment(!togglePostComment)
  }

  return (
      <div className='comment-wrapper'>
          <div className="comment-card">           
            <div className="comment-counter">
                <img src="" alt="" className="plus" />
                <a href="" className="count"></a>
                <img src="" alt="" className="minus" />
            </div>
            <div className="comment-main" key={comment.id}>
                <div className="comment-header">
                    <img src="" alt="" />
                    <h5 className="username">{comment.user.username}</h5>
                    <p className="created-at">{comment.createdAt}</p>
                    <div className='comment-footer-box'>
                    <p className="comment-reply" onClick={togglePost}>Reply</p>
                    <p className="comment-reply" onClick={toggleReply}>view</p>
                    </div>
                </div>
                <div className="comment-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos dolorum facilis quaerat aliquam explicabo voluptate aliquid architecto! Modi, blanditiis.</div>
              </div>
            </div>

          <div className='comment-reply-box'>
          <div className='comment-reply-wrapper'>
          {toggleReplies && comment.replies.map((reply) => (
            <Reply reply={reply} />
          ))}
          </div>
          <div className='comment-reply-wrapper'>
          {togglePostComment && (
            <CommentPost />
          )}
          </div>
          </div>


      </div>
  )
}

export default Comment