import "./comment.component.css";

export function CommentComponent(props) {
  const onDelete = () => {
    props.onDelete(props.index);
  };

  return (
    <div className="comment">
      <div className="comment__body">
        <div>Имя: {props.name}</div>
        <div>{props.comment}</div>
      </div>
      <div onClick={onDelete} className="comment__delete">
        <div>X</div>
      </div>
    </div>
  );
}
