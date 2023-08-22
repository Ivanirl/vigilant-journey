import Roller from "../Resources/board.png"

export default function Nothing() {
  return (
    <div className="spin-doctor">
      <div className="Spin">
        <img src={Roller} />
      </div>
      <div className="textholder">
        <span>Nothing to see here yet folks!</span>
      </div>
    </div>
  );
}
