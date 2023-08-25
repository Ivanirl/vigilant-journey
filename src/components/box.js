import Cardinho from "../Resources/IMG_7026.jpg"

export default function Box() {
  return (
    <div className="BoxBox">
      <div className="smaller-box">
        <div className="top">
          <img src={Cardinho} />
        </div>
        <div className="bottom">
          <div className="one">
            <div className="left">
              <span className="big">JORDAN</span>
              <span className="small">Retro Low OG SP</span>
              <span className="red">Travis Scott Reverse Mocha</span>
            </div>
            <div className="right">
              <span>$1,283</span>
            </div>
          </div>
          <div className="two">
            <div className="left">
                <div className="color box">
                <div className="R circle"></div>
                <div className="B circle"></div>
                <div className="G circle"></div>
                </div>
            </div>
            <div className="right">
                <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
