import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

const Post = ({ images, setPageNo }) => {
  const selctor = ".image-class:last-child";
  const setNextPage = () => {
    setPageNo((prev) => prev + 1);
  };
  useInfiniteScroll(images, selctor, setNextPage);
  return (
    <div className="images-container">
      {images.map((image) => {
        return (
          <img
            id={image.id}
            key={image.id}
            className="image-class"
            src={image.download_url}
            alt="image"
          />
        );
      })}
    </div>
  );
};

export default Post;
