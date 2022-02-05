import blogblur from "../logo/bgblur-hero.png";
import "../order/order.scss";
import Order1 from "./order1/order1";
import Footer from "../footer/footer.js";
function Order() {
  document.title = "order";
  return (
    <div className="order">
      <img alt="" className="order--imgm" width="100%" src={blogblur} />
      <div className="order--title">
        <p style={{ marginLeft: "25em" }} className="feature--p">
          PLANS & PRICING
        </p>
        <h2 className="feature--h2">
          Development to production. Choose your plan.
        </h2>
      </div>
      <Order1 />
      <Footer />
    </div>
  );
}
export default Order;
