import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import Price from "../components/Pricing";

export default function Random() {
  return (
    <div>
      <NavBar />
      <div className="bodice">
        <div className="swarm">
          <h1>BABY</h1>
          <span>This is a page I will use to demonstrate my ability to create pricing sections.</span>
          <div className="oui">
            <table >
              <tr>
                <td>
                  <Price />
                </td>
                <td>
                  <Price />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
