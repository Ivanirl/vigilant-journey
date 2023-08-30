export default function Toggler() {
  return (
    <div className="toggler">
      <ul className="options">
        <li className="navbar-link">
          <span>okay</span>
          <div className="rectangle"></div>
        </li>
      </ul>
      <ul className="end-options">
        <li className="navbar-link">more</li>
        <li className="navbar-link">less</li>
      </ul>
    </div>
  );
}
