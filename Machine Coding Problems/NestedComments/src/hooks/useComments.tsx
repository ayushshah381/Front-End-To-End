import { useState } from "react";

// React custom hook to add or delete comment
const useComments = (initialComments: any[]) => {
  const [commentsData, setCommentsData] = useState(initialComments);

  const addComment = (parentId: number) => {
    const commentDesc = prompt("Add your comment here:");

    if (!commentDesc) {
      return;
    }

    const newChild = {
      id: Date.now(),
      desc: commentDesc,
      children: [],
    };

    const updateComments = (comments: any[]): any[] => {
      return comments.map((comment) => {
        if (parentId === comment.id) {
          return {
            ...comment,
            children: [...comment.children, newChild],
          };
        }
        if (comment.children.length > 0) {
          return {
            ...comment,
            children: updateComments(comment.children),
          };
        }
        return comment;
      });
    };

    setCommentsData((prev) => updateComments(prev));
  };

  const deleteComment = (parentId: number) => {
    const updateComments = (comments: any[]): any[] => {
      return comments
        .filter((comment) => comment.id !== parentId)
        .map((comment) => {
          if (comment.children.length > 0) {
            return {
              ...comment,
              children: updateComments(comment.children),
            };
          }
          return comment;
        });
    };

    setCommentsData((prev) => updateComments(prev));
  };

  return {
    commentsData,
    addComment,
    deleteComment,
  };
};

export default useComments;
