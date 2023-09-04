import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CityInput from '../components/CityInput';
import countriesAndCities from '../assets/data/countries-and-cities';

export default function City({
    cityInput,
    setCityInput,
    citiesMatchingInput,
    setCitiesMatchingInput
}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const cityId = searchParams.get("id");

    const navigate = useNavigate();

    const [selectedCity, setSelectedCity] = useState(countriesAndCities.filter((city) => city.geonameId === parseInt(cityId)));

    useEffect(() => {
        setSelectedCity(countriesAndCities.filter((city) => city.geonameId === parseInt(cityId)));
    }, [cityId])

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={`https://skiver.co.uk/city?id=${cityId}`} />
                <title>Travel Information for {selectedCity[0].city}, {selectedCity[0].subCountry}, {selectedCity[0].country} • Skiver</title>
                <meta name="description" content={`Entry requirements, flight, accommodation, weather, and events information for ${selectedCity[0].city}, ${selectedCity[0].subCountry}, ${selectedCity[0].country}.`} />
            </Helmet>

            <header>
                <CityInput
                    cityInput={cityInput}
                    setCityInput={setCityInput}
                    citiesMatchingInput={citiesMatchingInput}
                    setCitiesMatchingInput={setCitiesMatchingInput}
                />
            </header>

            <main>
                <h2>{selectedCity[0].city}, {selectedCity[0].subCountry}, {selectedCity[0].country}</h2>
                <p>This is some text in the main.</p>
            </main>
        </div>
    )
}