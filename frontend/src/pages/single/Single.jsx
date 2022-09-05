import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

export default function Single({author}, {title}, {content}, {published_time}) {
  return (
    <div className="single">
      <SinglePost author={author} title={title} content={content} published_time={published_time}/>
      <Sidebar />
    </div>
  );
}
