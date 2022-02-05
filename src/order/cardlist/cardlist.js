import "./cardlist.scss";
// file cardlist.scss nằm trong folder cardlist, mà file cardlist.js này ở cùng vị trí với nó nên chỉ cần ./cardlist.scss là được

/*
  ./ : gọi đến các file/folder cùng cấp
  ../ : gọi đến các file/folder ngoài 1 cấp
  ví dụ về cấp:
  folder "Home"
  |
  |__folder "Main"
      |
      |__ index.js
      |
      |__ index.css
  |
  |__ home.js
  
  từ home.js gọi đến index.js, ta cần gọi: ./Main/index.js
  ./Main là đi vào folder Main, /index.js là gọi đến file index.js

  từ index.js gọi đến home.js, ta cần gọi: ../home.js
  ../ là đi ra ngoài folder Home, tức là ta đang đứng ở folder Main, /home.js là gọi đến file home.js

  
*/
import logocard from "../../logo/570_1641314360_original.png";
import logocard1 from "../../logo/5071_1619802816_original.jpg";
import logocard2 from "../../logo/5543_1626086528_original.jpg";
import logocard3 from "../../logo/4127_1602870999_original.jpg";
import logocard4 from "../../logo/3354_1588169329_original.jpg";
import logocard5 from "../../logo/3801_1598331229_original.jpg";
import logocard6 from "../../logo/3298_1587514296_original.jpg";
import logocard7 from "../../logo/3355_1588169979_original.jpg";
import CardlistItem from "./cardlistitem";

function Cardlist() {
  return (
    <div className="cardlist">
      <img alt="" className="cardlist--img__sub" width="98%" src={logocard} />z
      <div className="cardlist--flex">
        <div className="cardlist--item">
          <img alt="" className="cardlist--img" width="64px" src={logocard1} />
          <h2 className="cardlist--h2">New Year's Deals</h2>
        </div>
        <div className="cardlist--item">
          <img alt="" className="cardlist--img" width="64px" src={logocard2} />
          <h2 className="cardlist--h2">Món Ăn Ngay </h2>
        </div>
        <div className="cardlist--item">
          <img alt="" className="cardlist--img" width="64px" src={logocard3} />
          <h2 className="cardlist--h2">Menu Thức Uống </h2>
        </div>
        <div className="cardlist--item">
          <img alt="" className="cardlist--img" width="64px" src={logocard4} />
          <h2 className="cardlist--h2">Thực Phẩm Chế Biến</h2>
        </div>
        <div className="cardlist--item">
          <img alt="" className="cardlist--img" width="64px" src={logocard5} />
          <h2 className="cardlist--h2">Patyholic</h2>
        </div>
        <div className="cardlist--item">
          <img alt="" className="cardlist--img" width="64px" src={logocard6} />
          <h2 className="cardlist--h2">Bơ trứng & Sữa</h2>
        </div>
        <div className="cardlist--item">
          <img alt="" className="cardlist--img" width="64px" src={logocard7} />
          <h2 className="cardlist--h2">Thực Phẩm Tương Sống</h2>
        </div>
        <div className="cardlist--item">
          <img alt="" className="cardlist--img" width="64px" src={logocard1} />
          <h2 className="cardlist--h2">New Year's Deals</h2>
        </div>
      </div>
      <h2 className="cardlist-test">Menu Thức Ăn</h2>
      <CardlistItem />
    </div>
  );
}
export default Cardlist;
