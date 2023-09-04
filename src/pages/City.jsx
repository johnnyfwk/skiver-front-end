import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import CityInput from '../components/CityInput';
import countriesAndCities from '../assets/data/countries-and-cities';
import * as api from '../api';

export default function City({
    cityInput,
    setCityInput,
    citiesMatchingInput,
    setCitiesMatchingInput
}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const cityId = searchParams.get("id");

    const [selectedCity, setSelectedCity] = useState(countriesAndCities.filter((city) => city.geonameId === parseInt(cityId)));

    const [foreignTravelAdvice, setForeignTravelAdvice] = useState({});
    const [entryRequirements, setEntryRequirements] = useState("");

    useEffect(() => {
        const chosenCity = countriesAndCities.filter((city) => city.geonameId === parseInt(cityId));
        setSelectedCity(chosenCity);
        api.getGovUKForeignTravelAdvice(chosenCity[0].country)
            .then((response) => {
                setForeignTravelAdvice(response);
                const entryRequirementsInfo = response.details.parts.filter((part) => {
                    return part.slug === "entry-requirements";
                })
                const entryRequirementsInfoAmendTarget = entryRequirementsInfo[0].body.replaceAll("<a", "<a target='_blank' rel='noopener noreferrer'");
                setEntryRequirements(entryRequirementsInfoAmendTarget);
            })
            .catch((error) => {
                setForeignTravelAdvice({});
                setEntryRequirements("");
            })
    }, [cityId])

    // console.log(foreignTravelAdvice)

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

                <section>
                    <h3>Contents</h3>
                    <ul>
                        {entryRequirements
                            ? <li><a href="#entry-requirements">Entry Requirements</a></li>
                            : null
                        }
                    </ul>
                </section>

                {entryRequirements
                    ? <section>
                        <h3 id="entry-requirements">Entry Requirements</h3>
                        <p><b>Source</b>: UK Government website <a href={`https://www.gov.uk${foreignTravelAdvice.base_path}`} target="_blank" rel="noopener noreferrer">GOV.UK</a></p>
                        <div className="body" dangerouslySetInnerHTML={{ __html: entryRequirements }} />
                    </section>
                    : null
                }
            </main>
        </div>
    )
}