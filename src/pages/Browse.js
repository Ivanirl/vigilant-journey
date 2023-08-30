import TwoBars from "../components/NavandSubbar";
import Box from "../components/box";
import Footer from "../components/Footer";
import ThreeBars from "../components/threeBars";
import BigPic from "../components/BigPic";

export default function Browse() {
  return (
    <div>
      <ThreeBars />
      <div className="bodice Browse">
        <BigPic />
        <div className="caro">
          <Box />
          <Box />
          <Box /> 
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
