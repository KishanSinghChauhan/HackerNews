import React from 'react';
import CommentsList from '../Components/CommentsList';
import CommentInput from '../Components/CommentInput';
import {connect} from 'react-redux';

const HomePage = ({currentComments}) =>{
    return(
        <div className="">
            <CommentInput/>
            { currentComments.map((comment) =>{
                return(
                    <CommentsList key={comment.id} comment={comment}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = state =>({
    currentComments: state.comment.currentComments
})



export default connect(mapStateToProps)(HomePage);