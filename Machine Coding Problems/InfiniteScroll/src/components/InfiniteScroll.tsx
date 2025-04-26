import { useState, useEffect } from "react";
import Post from "./Post";

const API = "https://picsum.photos/v2/list?limit=3&page=";

const InfiniteScroll = () => {
  const [pageNo, setPageNo] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(`${API}${pageNo}`);
      const data = await res.json();
      setImages((prev) => [...prev, ...data]);
    };

    fetchImages();
  }, [pageNo]);

  return <Post images={images} setPageNo={setPageNo} />;
};

export default InfiniteScroll;
