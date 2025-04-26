import { useEffect } from "react";

export const useInfiniteScroll = (images, selctor, callback) => {
  useEffect(() => {
    let observer = new IntersectionObserver(
      (param) => {
        console.log(param[0].isIntersecting);
        if (param[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 0.5 }
    );

    const ele = document.querySelector(selctor);
    if (ele) {
      observer.observe(ele);
    }

    return () => {
      if (ele) {
        observer.unobserve(ele);
      }

      observer.disconnect();
    };
  }, [images]);
};
