import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CityInput from '../components/CityInput';
import countriesAndCities from '../assets/data/countries-and-cities';
import * as api from '../api';

export default function Home({
    cityEntered,
    setCityEntered,
    citiesMatchingCityEntered,
    setCitiesMatchingCityEntered,
    selectedCity,
    setSelectedCity
}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const cityIdQuery = searchParams.get("city_id");

    const navigate = useNavigate();

    function handleMatchingCities(event) {

    }

    useEffect(() => {

    }, [cityIdQuery])

    console.log(govUkForeignTravelCityInfoEntryRequirements)

    return (
        <div>
            <Helmet>

            </Helmet>

            <header>
                <h1>Get travel plans for cities around the world</h1>
                <form>

                </form>
            </header>

            <main>

            </main>
        </div>
    )
}