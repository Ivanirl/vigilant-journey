import NavBar from "../../components_oriflame/navbar";
import Banner from "../../components_oriflame/Banner";
import Carousel from "../../components_oriflame/Carousel";


export default function () {
  return (
    <div>
      <NavBar />
      <div className="oho">
        <Banner />
        <Carousel/>
      </div>
    </div>
  );
}
