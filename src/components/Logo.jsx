import { Link } from "react-router-dom";

export default function Logo({
    setOriginAirportInput,
    setDestinationAirportInput
}) {
    function handleLogo() {
        window.scrollTo(0, 0);
        setOriginAirportInput("");
        setDestinationAirportInput("");
    }

    return (
        <Link to="/" id="logo" onClick={handleLogo}>Skiver</Link>
    )
}