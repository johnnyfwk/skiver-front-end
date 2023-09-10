import { Link } from "react-router-dom"

export default function Footer({
    setOriginAirportInput,
    setDestinationAirportInput
}) {
    function handleFooterLinks() {
        window.scrollTo(0, 0);
        setOriginAirportInput("");
        setDestinationAirportInput("");
    }

    return (
        <footer>
            <div className="footer-links" onClick={handleFooterLinks}>
                <div className="footer-links-section">
                    <div>Skiver.co.uk</div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="footer-links-section">
                    <div>Legal Stuff</div>
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
            </div>
            <div id="copyright">Copyright &copy; {new Date().getFullYear()} Skiver.co.uk. All Rights Reserved.</div>
        </footer>
    )
}