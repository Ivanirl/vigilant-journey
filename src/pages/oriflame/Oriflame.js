import head from "../../Resources/Head.JPG";

import NavBar from "../../components_oriflame/navbar";
import Banner from "../../components_oriflame/Banner";
import Carousel from "../../components_oriflame/Carousel";
import LinkBar from "../../components_oriflame/Category_links";
import CardA from "../../components_oriflame/productcardA";
import Split from "../../components_oriflame/SplitBanner";
import News from "../../components_oriflame/ArticleThumbnail";
import Footer from "../../components_oriflame/Footer";

import { useState, useEffect } from "react";


export default function () {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 550) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <div>
      <div className={scrolled? "showgreen" : "noshow"}></div>
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
        <section className="wnsection Bb">
          <div className="header">
            <h1>What's new</h1>
            <button>VIEW ALL</button>
            <span>
              Body care means taking care of your body from head to toe and
              plays an important role when you <br></br>will feel clean,
              refreshed, healthy and pampered. We offer a comprehensive range of
              products for <br></br>feet, oral hygiene and body, to meet your
              daily needs.
            </span>
          </div>
          <div className="showcase">
            <div className="imgCont">
              <img src={head} />
              <button>GET STARTED</button>
            </div>
            <div className="products">
              <CardA />
            </div>
          </div>
        </section>
        <section className="wnsection Bb Be">
          <div className="header">
            <h1>What's new</h1>
            <button>VIEW ALL</button>
            <span>
              We believe beauty is not only products, but inspiration and
              growth. This is where we share <br></br>facts, tips and how to's to
              boost your confidence and help you stay on top of trends.
            </span>
          </div>
          <div className="showcase">
            <News />
            <News />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
