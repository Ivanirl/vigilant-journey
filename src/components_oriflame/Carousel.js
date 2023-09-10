import herobiggy from "../Resources/Screenshot (141).png";

export default function Carousel() {
  return (
    <div className="BigCaro">
      <img src={herobiggy} />
      <div className="rootbeer">
        {" "}
        <button className="themebutton1">SHOP NOW</button>
      </div>
    </div>
  );
}
