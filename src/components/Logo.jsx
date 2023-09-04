import { Link } from "react-router-dom";

export default function Logo({
    setCityInput,
    setCitiesMatchingInput
}) {
    function handleLogo() {
        setCityInput("");
        setCitiesMatchingInput([]);
    }

    return (
        <Link to="/" id="logo" onClick={handleLogo}>Skiver</Link>
    )
}