import { useRef } from "react";
import clsx from "clsx";

import Post from "../Post/index";
import useLazyLoad from "../hooks/useLazyLoad";
import posts from "../features/posts.json";

import "./style.css";

const NUM_PER_PAGE = 10;

const Posts = () => {
  const triggerRef = useRef(null);
  const onGrabData = (currentPage) => {
    // This would be where you'll call your API
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = posts.slice(
          (currentPage - 1) * NUM_PER_PAGE,
          NUM_PER_PAGE * currentPage
        );
        resolve(data);
      }, 3000);
    });
  };
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

  return (
    <section className="posts">
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
        Loading posts...
      </div>
    </section>
  );
};

export default Posts;
