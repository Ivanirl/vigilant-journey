import bigface from "../Resources/AXKF9216.JPG";
import joko from "../Resources/Joko.JPG";

function Home() {
  return (
    <div className="bigBody">
      <div className="HomeContainer">
        <section className="heroSection">
          <div className="lefty">
            <h1 className="Heroo">
              FROZEN IN <br></br>TIME
            </h1>
            <span>Capture your finest moments forever.</span>
            <button className="elsa">Learn More</button>
          </div>
          <div className="right">
            <img className="bigFace" src={bigface} alt="ivanhead" />
          </div>
        </section>
        <section className="miniGal">

        </section>
      </div>
    </div>
  );
}

export default Home;
