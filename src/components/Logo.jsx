import { Link } from "react-router-dom";

export default function Logo({
    setDepartureAirportInput,
    setArrivalAirportInput
}) {
    function handleLogo() {
        window.scrollTo(0, 0);
        setDepartureAirportInput("");
        setArrivalAirportInput("");
    }

    return (
        <Link to="/" id="logo" onClick={handleLogo}>Skiver</Link>
    )
}