const store = {};

/*
  имитация сохранения комментов на сервере
*/

export function saveComment(movieId, comments) {
  store[movieId] = comments;
}

export function getCommentByMovieId(movieId) {
  return store[movieId] || [];
}

export function deleteComment(movieId, commentId) {
  console.log("COMMENT DELETE", movieId, commentId);
}
