import "./style.css";

const Post = ({ post }) => (
  <article className="post">
    <header>
      <h2>{post.title}</h2>
    </header>
    <p>{post.body}</p>
    <section>
      <h3>Tags</h3>
      <div className="tags">
        {post.tags.map((tag, i) => (
          <a href="#" key={`${tag}-${i}`}>
            {tag}
          </a>
        ))}
      </div>
    </section>
  </article>
);

export default Post;
