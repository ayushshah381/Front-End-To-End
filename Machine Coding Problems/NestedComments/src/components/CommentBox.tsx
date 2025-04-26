const CommentBox = ({ data, addComment, deleteComment }) => {
  return (
    <div className="comment-container">
      <div>{data.desc}</div>
      <div className="button" onClick={() => addComment(data.id)}>
        {" "}
        Reply
      </div>
      <div className="button" onClick={() => deleteComment(data.id)}>
        {" "}
        Delete
      </div>
    </div>
  );
};

export default CommentBox;
