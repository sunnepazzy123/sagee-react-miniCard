import { useState, useEffect } from "react";
import Comment from "./Comment";
import axios from 'axios'
import './CommentList.css';
import CommentPost from "./CommentPost";


const Commentlist = () => {
    const [comments, setComments] = useState(null)

    useEffect(()=>{
        const fetchComments = async() => {
           const response = await axios.get('http://localhost:8000/comments');
           setComments(response.data);
        }


        fetchComments();
    }, [])


  return (
    <div className='comment-list-wrapper'>
        <div className="='comment-list">
        {comments && comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))
        }
        </div>

        <div className='comment-post'>
          <CommentPost />
        </div>
    </div>
  )
}

export default Commentlist