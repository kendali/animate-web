const NavBar = () => {
    const navList = ['Home', 'Blog', 'Our Mission', 'Our Team']
    const navItem = navList.map((item) =>

        <li classname="nav-item" key={item} >
            <a className="nav-link fs-5 f-white " aria-current="page" href="#">{item}</a>
        </li>

    )
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <i className="fa-solid fa-droplet f-orange fs-1"></i>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars-progress f-orange"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        {navItem}
                    </ul>
                <div className="button">
                    <a href="#" className="myBtn f-white fs-5 mx-3">Log in</a>
                    <a href="#" className="myBtn f-white fs-5 border rounded-5 px-4 py-2">Get Started</a>
                </div>
                </div>
            </div>
        </nav>

    )
}

export default NavBar
