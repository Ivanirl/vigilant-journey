import { Link } from "react-router-dom";

export default function LinkBar(){
    return (
        <div className="LinkBar">
            <div className="cont">
                <ul>
                    <li>
                        <Link to="/oriflame">
                            <span className="linky">ECATALOGUE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span className="linky">NUTRITION</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span className="linky">SKIN CARE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span className="linky">MAKE-UP</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span className="linky">FRAGRANCE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span className="linky">BATH & BODY</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span className="linky">HAIR</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span className="linky">WELLNESS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span className="linky">MEN</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span className="linky">KIDS & BABY</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}