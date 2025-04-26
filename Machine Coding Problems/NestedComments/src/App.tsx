import Comments from "./components/Comments";
import useComments from "./hooks/useComments";
import { comments } from "./data/commentsData";
import "./styles.css";

export default function App() {
  const { commentsData, addComment, deleteComment } = useComments(comments);
  if (!commentsData?.length) {
    return <div> No comments Yet</div>;
  }

  return (
    <div className="App">
      <Comments
        data={commentsData[0]}
        addComment={addComment}
        deleteComment={deleteComment}
      />
    </div>
  );
}

// Codesandbox link: https://codesandbox.io/p/sandbox/q87kx2
