import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}, {title}, {author}, {number}) {
  const post = "/post/"+{author}+{number};
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to={post} className="link">
          {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{author}</span>
      </div>
    </div>
  );
}
