function Subbar(){
    return(
        <div className="Barrister">
            <div className="shoebox">
                <img alt="shoe icon" />
            </div>
            <ul classname="bubble">
                <li className="navbar-link">All Products</li>
                <li className="navbar-link">Popular</li>
                <li className="navbar-link">Women</li>
                <li className="navbar-link">Men</li>
                <li className="navbar-link">Kids</li>
                <li className="navbar-link">More</li>
            </ul>
            <div className="searchbox">
                <img alt="search" />
            </div>
            <div className="favbox">
                <img alt="favourite" />
            </div>
        </div>
    )
}

export default Subbar;