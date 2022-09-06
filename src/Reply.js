import './Reply.css';

const Reply = ({reply}) => {
  return (
    <div className="reply-wrapper">
          <div className="reply-card">           
            <div className="reply-counter">
                <img src="" alt="" className="plus" />
                <a href="" className="count"></a>
                <img src="" alt="" className="minus" />
            </div>
            <div className="reply-main" key={reply.id}>
                <div className="reply-header">
                    <img src="" alt="" />
                    <h5 className="username">{reply.user.username}</h5>
                    <p className="created-at">{reply.createdAt}</p>
                    <p className="replyButton">Reply</p>
                </div>
                <div className="reply-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos dolorum facilis quaerat aliquam explicabo voluptate aliquid architecto! Modi, blanditiis.</div>
         
             </div>
            </div>
    </div>
  )
}

export default Reply