import blogblur from "../logo/bgblur-hero.png";
import "../blog/blog.scss";
import dock from "../logo/dock.webp";
import BlogSub from "./blogsub/blogsub";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import ApiBlog from "../api/fakearray";
import { apiBlog1 } from "../api/fakeapi2";

function Blog() {
  document.title = "blog";

  return (
    <div className="blog">
      <img alt="" width="100%" src={blogblur} />
      <div className="blog-h2p">
        <p className="blog-p">THE BLOG</p>
        <h2 className="blog-h2">Insights and updates from across the team</h2>
      </div>
      <div className="blog--custom">
        {ApiBlog.map((item, index) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              key={index}
              to={`/blog/detaiblog/${item.id}`}
            >
              <div className="blog--img">
                <img alt="" className="blog--img__sub" src={item.img} />
                <div className="blog--h2pp">
                  <p className="blog-pp">Tutorial</p>
                  <h2 className="blog-h22">{item.tittle}</h2>
                </div>
              </div>
            </Link>
          );
        })}
        <div>
          <div>
            {apiBlog1.map((item, index) => {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  key={index}
                  to={`/blog/detaiblog/${item.id}`}
                >
                  <div key={index} className="blog--box ">
                    <div className="blog-pd">
                      <p className="blog-pp">Tutorial</p>
                      <h2 className="blog-h22">{item.tittle}</h2>
                      <div className="blog-time">
                        <div className="blog-time-pd">2022-01-06</div>
                        <a>Read more</a>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <img alt="" className="blog--img__doks" width="100%" src={dock} />
      </div>
      <BlogSub />
      <Footer />
    </div>
  );
}
export default Blog;
