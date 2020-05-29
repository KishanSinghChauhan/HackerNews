import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import {addUpvote,removeDownvote} from '../redux/comment/comment-actions'
import {connect } from 'react-redux';
import './styles/commentList.scss';

const CommentsList = ({ comment,addUpvote,removeDownvote }) =>{
    const {id,author,commentName,upvotes,downvotes} = comment
    return(
        <div className="row mt-4 comment">
            <div className="col-6 pl-5">
                <span className=" comment-head mr-1">{id}<i>.</i></span>
                <span className=" comment-head ml-1">{author}</span>
                <p className="comment-para">{commentName}</p>
            </div>
            <div className="col-6 comment-vote">
                <span className="mt-3"><FontAwesomeIcon icon={faThumbsUp} className="mr-2 mt-3 like-icon text-success" onClick={() => addUpvote(comment)}/>{upvotes}<i className="ml-1">upvotes</i></span><br />
                <span  className="mt-3"><FontAwesomeIcon icon={faThumbsDown}  className="mr-2 mt-3 dislike-icon text-danger" onClick={() => removeDownvote(comment)}/>{downvotes}<i className="ml-1">downvotes</i></span>
            </div>    
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addUpvote: comment => dispatch(addUpvote(comment)),
    removeDownvote: comment => dispatch(removeDownvote(comment))
})

export default connect(null,mapDispatchToProps)(CommentsList);