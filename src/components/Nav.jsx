import { Link } from "react-router-dom";

export default function Nav({ isNavVisible, setIsNavVisible }) {
    function handleNav() {
        window.scrollTo(0, 0);
        setIsNavVisible(false);
    }

    const styleNav = {
        left: isNavVisible ? "0%" : "100%"
    }

    return (
        <nav onClick={handleNav} style={styleNav}>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/terms-and-conditions" id="nav-terms-and-conditions">Terms & Conditions</Link>
            <Link to="/privacy-policy" id="nav-privacy-policy">Privacy Policy</Link>
        </nav>
    )
}