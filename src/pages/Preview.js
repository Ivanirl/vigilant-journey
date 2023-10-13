import TwoBars from "../components/NavandSubbar";
import BigPic from "../components/BigPic";
import Box from "../components/box";

export default function Preview() {
  return (
    <div>
      <TwoBars />
      <div className="Preview">
        <div className="bodice Browse">
          <BigPic />
          <section>
            <div className="left"></div>
            <div className="rite"></div>
          </section>
          <section>
            <div className="left"></div>
            <div className="rite"><BigPic /></div>
          </section>
          <section>
            <div>
              <Box />
              <Box />
              <Box />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
