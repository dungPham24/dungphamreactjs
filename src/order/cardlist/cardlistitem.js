import item1 from "/project/src/logo/promo_2711_1641055549966.jpg";
import item2 from "/project/src/logo/promo_2713_1641056385647.jpg";
import item3 from "/project/src/logo/promo_2705_1641055184568.jpg";
import item4 from "/project/src/logo/promo_2708_1641055302491.jpg";
import item5 from "/project/src/logo/promo_2710_1641055420852.jpg";
import item6 from "/project/src/logo/promo_2720_1641056802015.jpg";
import item7 from "/project/src/logo/promo_2715_1641056583250.jpg";
import item8 from "/project/src/logo/promo_2714_1641056461025.jpg";
import { useState, useLayoutEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import products from "../../fakeData";
function CardlistItem() {
  return (
    <div className="cardlist--product__test2">
      {products.map((item, index) => (
        <Link
          key={index}
          style={{ textDecoration: "none" }}
          to={`/order/detail/${item.id}`}
        >
          <div key={index} className="cardlist--product">
            <div>
              <img
                style={{ borderRadius: "10px" }}
                width="100%"
                src={item.img}
              />
            </div>
            <div className="cardlist--product__hidden">
              <p className="cardlist--product__h2">{item.title}</p>
            </div>
            <div className="cardlist--product__flex">
              <h2 className="cardlist--product__vn">{item.price}</h2>
              <span className="cardlist--product__15">{item.discout}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default CardlistItem;
