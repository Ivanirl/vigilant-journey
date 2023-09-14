import head from "../../Resources/Head.JPG"

import NavBar from "../../components_oriflame/navbar";
import Banner from "../../components_oriflame/Banner";
import Carousel from "../../components_oriflame/Carousel";
import LinkBar from "../../components_oriflame/Category_links";
import CardA from "../../components_oriflame/productcardA";
import Split from "../../components_oriflame/SplitBanner";

export default function () {
  return (
    <div>
      <NavBar />
      <div className="oho">
        <Banner />
        <Carousel />
        <LinkBar />
        <section className="wnsection">
          <div className="header">
            <h1>What's new</h1>
            <button>VIEW ALL</button>
          </div>
          <div className="showcase">
            <div className="imgCont">
              <img src={head} />
              <button>GET STARTED</button>
            </div>
            <div className="products">
              <CardA />
              <CardA />
              <CardA />
            </div>
          </div>
        </section>
        <section className="wnsection horsy">
          <div className="bgcircle"></div>
        <div className="header">
            <h1>Best Offers</h1>
            <button>VIEW OFFER</button>
          </div>
          <div className="showcase">
            <div className="products">
              <CardA />
              <CardA />
              <CardA />
              <CardA />
            </div>
            <div className="imgCont">
              <img src={head} />
              <button>SHOP NOW</button>
            </div>
          </div>
        </section>
        <section className=" wnsection split">
          <Split />
        </section>
      </div>
    </div>
  );
}

////work on navbar scroll style change import usestate from other navbar