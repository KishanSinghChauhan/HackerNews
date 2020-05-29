export const addCommentID = (currentComments, currentCommentToAdd) => {
    return [...currentComments, { ...currentCommentToAdd, id:currentComments.length +1}];
};
   
// export const  = (Todos, statustoaddTodo) => {
//     const existingTodo = Todos.find(
//       todo => todo.id === statustoaddTodo.id
//     );
  
//     if (existingTodo) {
//       return Todos.map(todo =>
//         todo.id === statustoaddTodo.id
//           ? { ...todo, status: !todo.status }
//           : todo
//       );
//     }
// }