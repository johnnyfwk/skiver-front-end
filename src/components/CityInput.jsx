

export default function CityInput({
    countriesAndCities,
    cityEntered,
    setCityEntered,
    setCitiesMatchingCityEntered
}) {

    function handleCityInput(event) {
        setCityEntered(event.target.value);
        if (event.target.value) {
            const allMatchingCities = countriesAndCities.filter((city) => city.city.toLowerCase().includes(event.target.value.toLowerCase()));
            const firstFiveMatchingCities = allMatchingCities.slice(0, 10);
            setCitiesMatchingCityEntered(firstFiveMatchingCities);
        }
        else {
            setCitiesMatchingCityEntered([]);
        }
    }

    return (
        <div>
            <label htmlFor="city-input">Enter city:</label>
            <input
                type="text"
                id="city-input"
                name="city-input"
                value={cityEntered}
                onChange={handleCityInput}
            ></input>
        </div>
    )
}