import React from "react";
import { getProductById } from "./fakeData";
import { useParams } from "react-router-dom";
import Footer from "./footer/footer";
import "../src/detail.scss";
const Detail = (props) => {
  document.title = "Detail";
  const id = useParams();

  const product = getProductById(id);

  return (
    <div className="detail">
      <div className="detail--box">
        <img alt="" className="detail--img" src={product.img} />
        <h2 className="detail--title">{product.title}</h2>
        <div className="detail--flex">
          <p className="detail--flex__p">{product.price}</p>
          <p className="detail--flex__p1">{product.discout}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
