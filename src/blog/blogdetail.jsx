import React from "react";
import { useParams } from "react-router-dom";
import "../blog/blogdetail.scss";
import { getProductByIds } from "./apiblog";
import Footer from "../footer/footer.js";
const Blogdetail = (props) => {
  const id = useParams();

  const products = getProductByIds(id);

  return (
    <>
      <div className="blogdetai">
        <h2 className="blogdetai--title">{products.title}</h2>
        <p className="blogdetai--time">{products.time}</p>
        <img
          alt=""
          className="blogdetai--img"
          width="828px"
          src={products.img}
          alt=""
        />
      </div>
      <div class="cha">
        <div class="con">
          <p>{products.content}</p>
        </div>
      </div>
      <div id="main"></div>
      <Footer />
    </>
  );
};

export default Blogdetail;
