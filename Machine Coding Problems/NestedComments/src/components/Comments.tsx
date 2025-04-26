import CommentBox from "./CommentBox";

const Comments = ({ data, deleteComment, addComment }) => {
  return (
    <>
      <div>
        <CommentBox
          data={data}
          deleteComment={deleteComment}
          addComment={addComment}
        />
      </div>
      <div className="nested-comments">
        {data.children.map((child) => {
          return (
            <Comments
              key={child.id}
              data={child}
              deleteComment={deleteComment}
              addComment={addComment}
            />
          );
        })}
      </div>
    </>
  );
};

export default Comments;
