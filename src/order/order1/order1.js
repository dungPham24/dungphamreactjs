import "../order1/order1.scss";
import Cardlist from "../cardlist/cardlist";
import { Link } from "react-router-dom";
function Order1() {
  return (
    <div className="order">
      <Link to="/SignIn" className="order1--box">
        <div className="order1--width">
          <div className="order1--tablet">
            <div>
              <h2 className="order1--h2">Basic</h2>
              <p className="order1--p">
                Great option to develop small applications
              </p>
            </div>
            <div className="order1--number1">
              <div className="order1--number">
                <span>0</span>
                <span>$</span>
              </div>
              <div>
                <span>per</span>'month'
              </div>
            </div>
          </div>
          <div className="order1--tablet1">
            <div className="order1--item">
              <p>CPU</p>
              <p className="order1--fff">Shared</p>
            </div>
            <div className="order1--item">
              <p>RAM</p>
              <p className="order1--fff">600Mb</p>
            </div>
            <div className="order1--item">
              <p>SSD</p>
              <p className="order1--fff">500Mb</p>
            </div>
            <div className="order1--item">
              <p>Startus when unused</p>
              <p className="order1--affter1">Offline</p>
            </div>
          </div>
          <div className="order1--get">
            <a href="/">Get Started</a>
          </div>
        </div>
        <div className="order1--width">
          <div className="order1--tablet">
            <div>
              <h2 style={{ color: "#fd970f" }} className="order1--h2">
                Awake
              </h2>
              <p className="order1--p">
                Everything inlcuded in Basic, but your app stays on all time
              </p>
            </div>
            <div className="order1--number1">
              <div className="order1--number">
                <span>2</span>
                <span>$</span>
              </div>
              <div>
                <span>per</span>'month'
              </div>
            </div>
          </div>
          <div className="order1--tablet1">
            <div className="order1--item">
              <p>vCPU</p>
              <p className="order1--fff">0.5</p>
            </div>
            <div className="order1--item">
              <p>RAM</p>
              <p className="order1--fff">600Mb</p>
            </div>
            <div className="order1--item">
              <p>SSD</p>
              <p className="order1--fff">500Mb</p>
            </div>
            <div className="order1--item">
              <p>Startus when unused</p>
              <p className="order1--affter">Online</p>
            </div>
          </div>
          <div className="order1--get">
            <a href="/">Get Started</a>
          </div>
        </div>
        <div className="order1--width">
          <div className="order1--tablet">
            <div>
              <h2 style={{ color: "#20b581" }} className="order1--h2">
                Boost
              </h2>
              <p className="order1--p">
                Best solution to develop and run high traffic apps
              </p>
            </div>
            <div className="order1--number1">
              <div className="order1--number">
                <span>8</span>
                <span>$</span>
              </div>
              <div>
                <span>per</span>'month'
              </div>
            </div>
          </div>
          <div className="order1--tablet1">
            <div className="order1--item">
              <p>vCPU</p>
              <p className="order1--fff">2</p>
            </div>
            <div className="order1--item">
              <p>RAM</p>
              <p className="order1--fff">6Gb</p>
            </div>
            <div className="order1--item">
              <p>SSD</p>
              <p className="order1--fff">10Gb</p>
            </div>
            <div className="order1--item">
              <p>Startus when unused</p>
              <p className="order1--affter">Online</p>
            </div>
          </div>
          <div className="order1--get">
            <a href="/">Get Started</a>
          </div>
        </div>
        <div className="order1--width">
          <div className="order1--tablet">
            <div>
              <h2 style={{ color: "#ab3887" }} className="order1--h2">
                Custom
              </h2>
              <p className="order1--p">Flexibility in everything</p>
            </div>
            <div className="order1--number1">
              <div className="order1--number">
                <span>41</span>
                <span>$</span>
              </div>
              <div>
                <span>per</span>'month'
              </div>
            </div>
          </div>
          <div className="order1--tablet1">
            <div className="order1--item">
              <p>vCPU</p>
              <p className="order1--fff">1</p>
            </div>
            <div className="order1--item">
              <p>RAM</p>
              <p className="order1--fff">16Gb</p>
            </div>
            <div className="order1--item">
              <p>SSD</p>
              <p className="order1--fff">50Gb</p>
            </div>
            <div className="order1--item">
              <p>Startus when unused</p>
              <p className="order1--affter">Online</p>
            </div>
          </div>
          <div className="order1--get">
            <a href="/">Get Started</a>
          </div>
        </div>
      </Link>
      <Cardlist />
    </div>
  );
}

export default Order1;
