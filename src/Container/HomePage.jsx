import React from 'react';
import CommentsList from '../Components/CommentsList';
import CommentInput from '../Components/CommentInput';

const HomePage = () =>{
    return(
        <div>
            <CommentInput />
            <CommentsList />
        </div>
    )
}

export default HomePage;