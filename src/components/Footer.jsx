import { Link } from "react-router-dom"

export default function Footer({
    setOriginAirportInput,
    setDestinationAirportInput,
    setIsNavVisible
}) {
    function handleFooterLinks() {
        window.scrollTo(0, 0);
        setIsNavVisible(false);
        setOriginAirportInput("");
        setDestinationAirportInput("");
    }

    return (
        <footer>
            <div className="footer-links" onClick={handleFooterLinks}>
                <div className="footer-links-section">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="footer-links-section">
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
            </div>
            <div id="copyright">Copyright &copy; {new Date().getFullYear()} Skiver.co.uk. All Rights Reserved.</div>
        </footer>
    )
}