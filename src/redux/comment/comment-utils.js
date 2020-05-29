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
//   export const removeRatingFromSkill = (currentSkills, skillToremoveRating) => {
  
//     return currentSkills.map(skill =>
//       skill.id === skillToremoveRating.id
//         ? { ...skill, rating: skill.rating - 1 }
//         : skill
//     );
//   };
