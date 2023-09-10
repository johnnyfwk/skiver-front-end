import { Link } from "react-router-dom";

export default function Logo({
    setIsNavVisible,
    setOriginAirportInput,
    setDestinationAirportInput
}) {
    function handleLogo() {
        window.scrollTo(0, 0);
        setIsNavVisible(false);
        setOriginAirportInput("");
        setDestinationAirportInput("");
    }

    return (
        <Link to="/" id="logo" onClick={handleLogo}>Skiver</Link>
    )
}