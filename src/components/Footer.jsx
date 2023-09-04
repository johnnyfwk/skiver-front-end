import { Link } from "react-router-dom"

export default function Footer({
    setDepartureAirportInput,
    setArrivalAirportInput
}) {
    function handleFooterLinks() {
        window.scrollTo(0, 0);
        setDepartureAirportInput("");
        setArrivalAirportInput("");
    }

    return (
        <footer>
            <div className="footer-links" onClick={handleFooterLinks}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <div id="copyright">Copyright &copy; {new Date().getFullYear()} Skiver.co.uk. All Rights Reserved.</div>
        </footer>
    )
}