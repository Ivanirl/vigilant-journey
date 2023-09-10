import NavBar from "../../components_oriflame/navbar";
import Banner from "../../components_oriflame/Banner";
import Carousel from "../../components_oriflame/Carousel";
import LinkBar from "../../components_oriflame/Category_links";


export default function () {
  return (
    <div>
      <NavBar />
      <div className="oho">
        <Banner />
        <Carousel/>
        <LinkBar />
      </div>
    </div>
  );
}
