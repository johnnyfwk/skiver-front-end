import countriesAndCities from '../assets/data/countries-and-cities';
import { useNavigate } from 'react-router-dom';

export default function CityInput({
    cityInput,
    setCityInput,
    citiesMatchingInput,
    setCitiesMatchingInput
}) {
    const navigate = useNavigate();

    function handleCityInput(event) {
        setCityInput(event.target.value);
        if (event.target.value) {
            const allMatchingCities = countriesAndCities.filter((city) => city.city.toLowerCase().includes(event.target.value.toLowerCase()));
            const matchingCities = allMatchingCities.slice(0, 10);
            setCitiesMatchingInput(matchingCities);
        }
        else {
            setCitiesMatchingInput([]);
        }
    }

    function handleMatchingCities(event) {
        navigate(`/city?id=${event.target.attributes.cityid.value}`);
        setCityInput("");
        setCitiesMatchingInput([]);
    }

    return (
        <div>
            <h1>Get travel information for cities around the world</h1>
            <p>Enter a city to get entry requirements, flight, accommodation, weather, and events information.</p>
            
            <label htmlFor="city-input">City:</label>

            <input
                type="text"
                id="city-input"
                name="city-input"
                value={cityInput}
                onChange={handleCityInput}
                placeholder="Enter destination city"
            ></input>

            <div id="cities-matching-input">
                {!cityInput
                    ? null
                    : citiesMatchingInput.length === 0
                        ? <div>No matching cities</div>
                        : citiesMatchingInput.map((city) => {
                            return (
                                <div
                                    key={city.geonameId}
                                    className="matching-city"
                                    onClick={handleMatchingCities}
                                    cityid={city.geonameId}
                                >{city.city}, {city.subCountry}, {city.country}</div>
                            )
                        })
                }
            </div>
        </div>
    )
}