import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import "../blog/blogdetail.scss";
import { getProductByIds } from "./apiblog";
import Footer from "../footer/footer.js";
const Blogdetail = (props) => {
  const { id } = useParams();
  const products = getProductByIds(id);
  return (
    <Fragment>
      <div className="blogdetai">
        <h2 className="blogdetai--title">{products.title}</h2>
        <p className="blogdetai--time">{products.time}</p>
        <img
          className="blogdetai--img"
          width="828px"
          src={products.img}
          alt="/"
        />
      </div>
      <div className="cha">
        <div className="con">
          <p>{products.content}</p>
        </div>
      </div>
      <div id="main"></div>
      <Footer />
    </Fragment>
  );
};

export default Blogdetail;
