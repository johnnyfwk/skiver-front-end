import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CityInput from '../components/CityInput';

import * as api from '../api';

export default function Home({
    cityInput,
    setCityInput,
    citiesMatchingInput,
    setCitiesMatchingInput
}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const cityIdQuery = searchParams.get("city_id");

    useEffect(() => {

    }, [cityIdQuery])

    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://skiver.co.uk/" />
                <title>Get travel information for cities around the world • Skiver</title>
                <meta name="description" content="Get entry requirements, flight, accommodation, weather, and events information for cities around the world." />
            </Helmet>

            <header>
                <form>
                    <CityInput
                        cityInput={cityInput}
                        setCityInput={setCityInput}
                        citiesMatchingInput={citiesMatchingInput}
                        setCitiesMatchingInput={setCitiesMatchingInput}
                    />
                </form>
                
            </header>

            <main>

            </main>
        </div>
    )
}