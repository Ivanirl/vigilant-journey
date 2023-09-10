import { Link } from "react-router-dom";

export default function LinkBar(){
    return (
        <div className="LinkBar">
            <div className="cont">
                <ul>
                    <li>
                        <Link to="/oriflame">
                            <span>ECATALOGUE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span>NUTRITION</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span>SKIN CARE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span>MAKE-UP</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span>FRAGRANCE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span>BATH & BODY</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span>HAIR</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span>WELLNESS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span>MEN</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oriflame">
                            <span>KIDS & BABY</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}