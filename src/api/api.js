import { useParams } from "react-router-dom";
import ApiBlog from "./fakearray";
import { apiBlog1 } from "./fakeapi2";
import blogdetail from "../logo/Custom-Size---8.png";
import "../api/api.scss";
import Footer from "../footer/footer";
function Api() {
  return (
    <>
      <div className="blog-detail">
        <div>
          <h2 className="blog-detail__h2">
            Create Your Own Ethereum Token in Minutes
          </h2>
          <p className="blog-detail__p">20.01.2022</p>
          <div>
            <img
              alt=""
              className="api--media"
              style={{ borderRadius: "10px" }}
              src={blogdetail}
            />
            <p className="blog-detail__p1">
              As more and more dollars are poured into blockchain companies,
              blockchain development has become an increasingly lucrative skill.
              In this tutorial, we’re going to be using Solidity, an
              Object-Oriented programming language for building smart contracts.
              <div style={{ fontSize: "16px", marginTop: "10px" }}>
                How Creating a Token Works
              </div>
              <p style={{ marginTop: "10px" }}>
                We are going to be making what’s known as an ERC-20 token, which
                is a standardized template for how an Ethereum token works.
                While our token can function as any other cryptocurrency, it
                will be run on the Ethereum blockchain, instead of running on
                its own blockchain.
              </p>
              <p style={{ marginTop: "20px" }}>
                To define the logic of our ERC-20 token, we will create a smart
                contract which dictates how the token can be minted,
                transferred, and burned. As long as your token conforms to the
                ERC-20 standard, it would be able to be used on most blockchain
                platforms.
              </p>
              <p style={{ marginTop: "20px" }}>
                Since we don’t want to deploy this token on the actual Ethereum
                network(That would cost money), we will be using a test network
                called Rinkeby. Rinkeby operates exactly like the Ethereum
                network, except we can give ourselves free ethereum whenever we
                want. This makes it much easier to test smart contracts and
                tokens.
              </p>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Api;
