const Navbar = () => {
  return (
    <header className="header-area">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between header">
          {/* Logo + Mobile Button */}
          <div className="logo fade-in-left flex items-center">
            <a href="/">
              <img src="logo.png" alt="logo" />
            </a>
            <button className="mobile-bars block lg:hidden ml-4">
              <i className="fa-solid fa-bars-staggered"></i>
            </button>
          </div>

          {/* Navigation */}
          <div className="nav">
            <ul className="flex flex-col lg:flex-row items-center gap-4">
              <li className="fade-in-left nav-item-1">
                <a className="nav-link active" href="#home-section">Home</a>
              </li>
              <li className="fade-in-left nav-item-2">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="fade-in-left nav-item-3">
                <a className="nav-link" href="#ecmcoin">ECM Coin</a>
              </li>
              <li className="fade-in-left nav-item-4">
                <a className="nav-link" href="#ecosystem">Ecosystem</a>
              </li>
              <li className="fade-in-left nav-item-5 block lg:hidden">
                <a href="#footer" className="btn-1 nav-link">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Right Side Buttons */}
          <div className="header-btn hidden lg:block">
            <div className="flex items-center gap-4">
              <a href="#" className="btn-1 fade-in-right btn-animate">Contact Us</a>
              
              <div className="dropdown fade-in-right dropdown-item-animate relative">
                <div className="relative bg-black">
                  <span
                    className="btn btn-secondary flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 text-white cursor-pointer"
                  >
                    <img src="/icon/world.svg" alt="photos" /> EN
                  </span>

                  <ul className="dropdown-menu country-dropdown absolute right-0 mt-2 w-32 bg-white shadow rounded-md">
                    <li><a className="dropdown-item active block px-4 py-2 hover:bg-gray-100" href="#">EN</a></li>
                    <li><a className="dropdown-item block px-4 py-2 hover:bg-gray-100" href="#">BN</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
