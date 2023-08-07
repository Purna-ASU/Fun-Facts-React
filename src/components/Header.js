import logo from "/Users/purnavenkatesh/Desktop/fun-facts-react/src/logo.svg";

function Header() {
    return(
      <nav>
            <img src={logo} alt="logo" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Mini Project</h4>
        </nav>
    )
  };

export default Header;