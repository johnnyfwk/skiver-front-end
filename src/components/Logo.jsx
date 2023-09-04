import { Link } from "react-router-dom";

export default function Logo({
    setCityInput,
    setCitiesMatchingInput,
    setSelectedCity
}) {
    function handleLogo() {
        setCityInput("");
        setCitiesMatchingInput([]);
        setSelectedCity({});
    }

    return (
        <Link to="/" id="logo" onClick={handleLogo}>Skiver</Link>
    )
}