import {commentActionTypes} from './comment-types';
import { addCommentID } from './comment-utils';
import { COMMENTS } from '../../shared/comments'

const INITIAL_STATE = {
  currentComments: COMMENTS,
}
const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case commentActionTypes.ADD_COMMENT:
        return {
          ...state,
          currentComments :  addCommentID(state.currentComments , action.payload)
        };
    default:
      return state;
  }
};

export default commentReducer;