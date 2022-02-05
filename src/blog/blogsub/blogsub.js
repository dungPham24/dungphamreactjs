import "../blogsub/blogsub.scss";
import Apiblog1 from "../apiblog";
import { Link } from "react-router-dom";

function BlogSub() {
  return (
    <div>
      {Apiblog1.map((item, index) => {
        return (
          <div key={index} className="blogsub" to="detail">
            <Link
              to={`/blog/detail/${item.id}`}
              className="blogsub-gird wow slideInUp"
              data-wow-duration=".5s"
              data-wow-delay=".2s"
            >
              <div className="blogsub-gird__1">
                <p className="blog-pp">{item.descriton}</p>
                <h2 className="blog-h22">{item.title}</h2>
                <div className="blog-time">
                  <p>{item.time}</p>
                  <p className="blog-time__hover">Read more</p>
                </div>
              </div>
              <div>
                <img
                  className="blogsub--mediaTablet"
                  style={{ borderRadius: "10px" }}
                  width="100%"
                  src={item.img}
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default BlogSub;
