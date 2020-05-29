export const addCommentID = (currentComments, currentCommentToAdd) => {
    return [...currentComments, { ...currentCommentToAdd, id:currentComments.length +1 ,upvotes: 0,downvotes: 0}];
};
export const addUpvoteToComment = (currentComments, addUpvoteToComment) => {
    const existingComment = currentComments.find(
      comment => comment.id === addUpvoteToComment.id
    );
  
    if (existingComment) {
      return currentComments.map(comment =>
        comment.id === addUpvoteToComment.id
          ? { ...comment, upvotes: comment.upvotes+1 }
          : comment
      );
    }
  
  };
  export const removeDownvoteFromComment = (currentComments, removeDownvoteFromComment) => {
  
    return currentComments.map(comment =>
      comment.id === removeDownvoteFromComment.id
        ? { ...comment, downvotes: comment.downvotes - 1 }
        : comment
    );
  };
