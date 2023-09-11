import head from "../../Resources/Head.JPG"

import NavBar from "../../components_oriflame/navbar";
import Banner from "../../components_oriflame/Banner";
import Carousel from "../../components_oriflame/Carousel";
import LinkBar from "../../components_oriflame/Category_links";
import CardA from "../../components_oriflame/productcardA";

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
      </div>
    </div>
  );
}
