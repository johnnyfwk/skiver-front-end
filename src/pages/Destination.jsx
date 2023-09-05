import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useSearchParams } from 'react-router-dom';
import TravelInput from '../components/TravelInput';
import airports from '../assets/data/airports';
import * as api from '../api';

export default function Destination({
    departureAirportInputLabel,
    departureAirportInputName,
    departureAirportInputPlaceholder,
    departureAirportInput,
    setDepartureAirportInput,
    arrivalAirportInputLabel,
    arrivalAirportInputName,
    arrivalAirportInputPlaceholder,
    arrivalAirportInput,
    setArrivalAirportInput
}) {
    const { destination_airport_id } = useParams();
    const { departure_airport_id } = useParams();

    const [departure, setDeparture] = useState(airports.filter((airport) => airport.objectID.toLowerCase() === departure_airport_id.toLowerCase()));
    const [destination, setDestination] = useState(airports.filter((airport) => airport.objectID.toLowerCase() === destination_airport_id.toLowerCase()));

    const [govUKForeignTravelAdvice, setGovUKForeignTravelAdvice] = useState({});
    const [govUKForeignTravelAdviceEntryRequirements, setGovUKForeignTravelAdviceEntryRequirements] = useState("");

    const [countryInfo, setCountryInfo] = useState({});

    useEffect(() => {
        setGovUKForeignTravelAdvice({});
        setGovUKForeignTravelAdviceEntryRequirements("");
        const departureInfo = airports.filter((airport) => airport.objectID.toLowerCase() === departure_airport_id.toLowerCase())
        setDeparture(departureInfo);
        const destinationInfo = airports.filter((airport) => airport.objectID.toLowerCase() === destination_airport_id.toLowerCase());
        setDestination(destinationInfo);
        if (departureInfo[0].country === "United Kingdom") {
            api.getGovUKForeignTravelAdvice(destinationInfo[0].country)
            .then((response) => {
                setGovUKForeignTravelAdvice(response);
                const entryRequirements = response.details.parts.filter((part) => {
                    return part.slug === "entry-requirements";
                })
                const entryRequirementsAmendLinkTarget = entryRequirements[0].body.replaceAll('<a', '<a target="_blank" rel="noopener noreferrer"')
                setGovUKForeignTravelAdviceEntryRequirements(entryRequirementsAmendLinkTarget);
            })
            .catch((error) => {
                setGovUKForeignTravelAdvice({});
                setGovUKForeignTravelAdviceEntryRequirements("");
            })
        }
        api.getRESTCountriesCountryInfo(destinationInfo[0].country)
            .then((response) => {
                const infoForCountry = response.filter((country) => {
                    return country.name.common === destinationInfo[0].country || country.name.official === destinationInfo[0].country;
                })
                setCountryInfo(infoForCountry);
            })
            .catch((error) => {
                console.log(error)
                setCountryInfo({});
            })
    }, [destination_airport_id, departure_airport_id])

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={`https://skiver.co.uk/destination/${destination_airport_id}`} />
                <title>Travel information for {destination[0].city}, {destination[0].country} • Skiver</title>
                <meta name="description" content={`Entry requirements, flight, accommodation, weather, and events information for ${destination[0].city}, ${destination[0].country}.`} />
            </Helmet>

            <TravelInput
                departureAirportInputLabel={departureAirportInputLabel}
                departureAirportInputName={departureAirportInputName}
                departureAirportInputPlaceholder={departureAirportInputPlaceholder}
                departureAirportInput={departureAirportInput}
                setDepartureAirportInput={setDepartureAirportInput}
                arrivalAirportInputLabel={arrivalAirportInputLabel}
                arrivalAirportInputName={arrivalAirportInputName}
                arrivalAirportInputPlaceholder={arrivalAirportInputPlaceholder}
                arrivalAirportInput={arrivalAirportInput}
                setArrivalAirportInput={setArrivalAirportInput}
            />

            <main>
                <h2>{destination[0].city},  {destination[0].country}</h2>

                {govUKForeignTravelAdviceEntryRequirements || countryInfo.length > 0
                    ? <section>
                        <h2>Contents</h2>
                        <ul>
                            {countryInfo.length > 0
                                ? <li><a href="#country-information">General Information</a></li>
                                : null
                            }
                            {govUKForeignTravelAdviceEntryRequirements
                                ? <li><a href="#entry-requirements">Entry Requirements</a></li>
                                : null
                            }
                        </ul>
                    </section>
                    : <div>No information to display</div>
                }

                {countryInfo.length > 0
                    ? <section id="country-information">
                        <h2>General Information</h2>
                        <img src={countryInfo[0].flags.svg} alt={countryInfo[0].flags.alt} />
                        {/* <div><b>Population</b>: {countryInfo[0].population.toLocaleString()}</div> */}
                        <div><b>Languages</b>: {Object.values(countryInfo[0].languages).join(", ")}</div>
                        <div><b>Currencies</b>: {Object.values(countryInfo[0].currencies).map((currency) => currency.name).join(", ")}</div>
                        <div><b>Continents</b>: {countryInfo[0].continents.join(", ")}</div>
                    </section>
                    : null
                }
                
                {govUKForeignTravelAdviceEntryRequirements
                    ? <section>
                        <h2 id="entry-requirements">Entry Requirements for UK travellers</h2>
                        <p><b>Source</b>: UK Government site <a href={`https://gov.uk/${govUKForeignTravelAdvice.base_path}`} target="_blank" rel="noopener noreferrer">GOV.UK</a></p>
                        <div
                            dangerouslySetInnerHTML={{ __html: govUKForeignTravelAdviceEntryRequirements }}
                            className="body"
                        />
                    </section>
                    : null
                }
            </main>
        </div>
    )
}