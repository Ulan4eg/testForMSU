import Icon from "@mdi/react";
import "./preview.component.css";
import { mdiImageOff } from "@mdi/js";
import { useEffect, useRef, useState } from "react";
import {
  saveComment,
  getCommentByMovieId,
  deleteComment as deleteCommentApi
} from "../services";
import { CommentComponent } from "./comment.component";

const DUMMY_TITLE = "Выберите фильм чтобы узнать подробности";

export function PreviewComponent(props) {
  const movie = props.movie;
  let nameRef = useRef("");
  let commentRef = useRef("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (props?.movie?.id) {
      setComments(getCommentByMovieId(movie.id));
    }
  }, [movie]);

  if (!movie) {
    return (
      <div className="preview_blank">
        {DUMMY_TITLE}
        <Icon path={mdiImageOff} title="left" size={1} />
      </div>
    );
  }

  const addComment = () => {
    const newArr = [
      ...comments,
      { name: nameRef.current.value, comment: commentRef.current.value }
    ];
    saveNewCommentList(newArr);
    nameRef.current.value = "";
    commentRef.current.value = "";
  };

  const saveNewCommentList = (arr) => {
    setComments(arr);
    saveComment(movie.id, arr);
  };

  const deleteComment = (index) => {
    deleteCommentApi(movie.id, index);
    comments.splice(index, 1);
    saveNewCommentList([...comments]);
  };

  return (
    <div className="preview">
      <div className="preview__title">{movie.title}</div>

      <img
        className="preview__large-cover"
        src={movie?.large_cover_image}
        alt={"ooops, again!!!"}
      />

      <div className="preview__description">
        Сюжет: {movie.description_full}
      </div>

      <div className="preview__synopsis">Краткий обзор: {movie.synopsis}</div>

      <div>Оставьте отзыв по фильму:</div>
      <div className="preview__input-comment">
        <input ref={nameRef} type="text" placeholder="Ваше имя" />
        <textarea ref={commentRef} placeholder="Комментарии..." />
        <button onClick={addComment}>Submit</button>
      </div>

      <div className="preview__comments">
        {comments.map((comment, index) => {
          return (
            <CommentComponent
              key={index}
              index={index}
              name={comment.name}
              comment={comment.comment}
              onDelete={deleteComment}
            />
          );
        })}
      </div>
    </div>
  );
}
