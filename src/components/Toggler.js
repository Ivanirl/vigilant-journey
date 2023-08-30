export default function Toggler() {
  return (
    <div className="toggler">
      <ul className="options">
        <li>
          <div className="rectangle"></div>
          <span>okay</span>
        </li>
      </ul>
      <ul className="end-options">
        <li>more</li>
        <li>less</li>
      </ul>
    </div>
  );
}
