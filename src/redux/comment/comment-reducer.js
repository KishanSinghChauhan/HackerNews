import {commentActionTypes} from './comment-types';
import { addCommentID,addUpvoteToComment,removeDownvoteFromComment} from './comment-utils';
import { COMMENTS } from '../../shared/comments'

const INITIAL_STATE = {
  currentComments: COMMENTS,
}
const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case commentActionTypes.ADD_COMMENT:
        return {
          ...state,
          currentComments :  addCommentID( action.payload ,state.currentComments)
        };
        case commentActionTypes.ADD_UPVOTE:
        return {
          ...state,
          currentComments :  addUpvoteToComment(state.currentComments ,action.payload)
        };
        case commentActionTypes.REMOVE_DOWNVOTE:
        return {
          ...state,
          currentComments :  removeDownvoteFromComment(state.currentComments , action.payload)
        };
    default:
      return state;
  }
};

export default commentReducer;