import { commentActionTypes } from './comment-types';

export const addComment = comment => ({
  type: commentActionTypes.ADD_COMMENT,
  payload: comment
});

export const addUpvote = comment => ({
    type: commentActionTypes.ADD_UPVOTE,
    payload: comment
});


export const removeDownvote = comment => ({
  type: commentActionTypes.REMOVE_DOWNVOTE,
  payload: comment
});