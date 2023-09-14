import split from "../Resources/peach image.png";

export default function Split() {
  return (
    <div className="BigSplit">
      <div className="bgcircle"></div>
      <img src={split} />
      <div className="RightBoy">
        <h1>
          Energising & Radiance - <span>Enhancing and Hydrating</span>
        </h1>
        <button className="themebutton1">SHOP NOW</button>
      </div>
    </div>
  );
}
