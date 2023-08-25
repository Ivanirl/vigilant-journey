import TwoBars from "../components/NavandSubbar";
import Box from "../components/box";
import Footer from "../components/Footer";

export default function Browse() {
  return (
    <div>
      <TwoBars />
      <div className="bodice">
        <Box />
      </div>
      <Footer />
    </div>
  );
}
