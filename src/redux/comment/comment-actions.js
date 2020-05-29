import { commentActionTypes } from './comment-types';

export const addComment = comment => ({
  type: commentActionTypes.ADD_COMMENT,
  payload: comment
});
