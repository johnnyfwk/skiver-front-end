import { Link } from "react-router-dom";

export default function Logo({
    setCityEntered,
    setCitiesMatchingCityEntered,
    setSelectedCity
}) {
    function handleLogo() {
        setCityEntered("");
        setCitiesMatchingCityEntered([]);
        setSelectedCity({});
    }

    return (
        <Link to="/" id="logo" onClick={handleLogo}>Skiver</Link>
    )
}