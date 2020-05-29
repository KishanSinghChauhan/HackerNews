import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import {addUpvote,removeDownvote} from '../redux/comment/comment-actions'
import {connect } from 'react-redux';

const CommentsList = ({ comment,addUpvote,removeDownvote }) =>{
    const {author,commentName,upvotes,downvotes} = comment
    return(
        <div>
            <h4>{author}</h4>
            <p>{commentName}</p>
            <span><FontAwesomeIcon icon={faThumbsUp} onClick={() => addUpvote(comment)}/>{upvotes}<i>upvotes</i></span><br />
            <span><FontAwesomeIcon icon={faThumbsDown} onClick={() => removeDownvote(comment)}/>{downvotes}<i>downvotes</i></span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addUpvote: comment => dispatch(addUpvote(comment)),
    removeDownvote: comment => dispatch(removeDownvote(comment))
})

export default connect(null,mapDispatchToProps)(CommentsList);