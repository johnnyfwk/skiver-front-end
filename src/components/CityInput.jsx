import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import countriesAndCities from '../assets/data/countries-and-cities';

export default function CityInput({
    cityInput,
    setCityInput,
    citiesMatchingInput,
    setCitiesMatchingInput,
    setSelectedCity
}) {
    const [selectedCityId, setSelectedCityId] = useState(null);

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

    function handleSelectedCity(event) {
        const selectedCity = {};
        selectedCity.cityId = event.target.attributes.cityid.value;
        selectedCity.city = event.target.attributes.city.value;
        selectedCity.subCountry = event.target.attributes.subcountry.value;
        selectedCity.country = event.target.attributes.country.value;
        console.log(selectedCity, "<------ selectedCity")
        setCityInput(event.target.attributes.city.value + ", " + event.target.attributes.subcountry.value + ", " + event.target.attributes.country.value);
        setCitiesMatchingInput(null);
        setSelectedCityId(event.target.attributes.cityid.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setCityInput("");
        setCitiesMatchingInput(null);
        navigate(`/city?id=${parseInt(selectedCityId)}`);
    }

    return (
        <form>
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
                {!cityInput || citiesMatchingInput === null
                    ? null
                    : citiesMatchingInput.length === 0
                        ? <div>No matching cities</div>
                        : citiesMatchingInput.map((city) => {
                            return (
                                <div
                                    key={city.geonameId}
                                    className="matching-city"
                                    onClick={handleSelectedCity}
                                    cityid={city.geonameId}
                                    city={city.city}
                                    subcountry={city.subCountry}
                                    country={city.country}
                                >{city.city}, {city.subCountry}, {city.country}</div>
                            )
                        })
                }
            </div>

            <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
    )
}