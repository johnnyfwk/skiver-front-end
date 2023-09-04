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

    const [searchParams, setSearchParams] = useSearchParams();
    const departureAirportId = searchParams.get("departure_airport_id");

    const [departure, setDeparture] = useState(airports.filter((airport) => airport.objectID.toLowerCase() === departureAirportId.toLowerCase()));
    const [destination, setDestination] = useState(airports.filter((airport) => airport.objectID.toLowerCase() === destination_airport_id.toLowerCase()));

    const [govUKForeignTravelAdvice, setGovUKForeignTravelAdvice] = useState({});
    const [govUKForeignTravelAdviceEntryRequirements, setGovUKForeignTravelAdviceEntryRequirements] = useState("");

    useEffect(() => {
        const departureInfo = airports.filter((airport) => airport.objectID.toLowerCase() === departureAirportId.toLowerCase())
        setDeparture(departureInfo);
        const destinationInfo = airports.filter((airport) => airport.objectID.toLowerCase() === destination_airport_id.toLowerCase());
        setDestination(destinationInfo);
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
    }, [destination_airport_id, departureAirportId])

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

                <section>
                    <h3>Contents</h3>
                    <ul>
                        {govUKForeignTravelAdviceEntryRequirements
                            ? <li><a href="#entry-requirements">Entry Requirements</a></li>
                            : null
                        }
                    </ul>
                </section>

                {govUKForeignTravelAdviceEntryRequirements
                    ? <section>
                        <h2 id="entry-requirements">Entry Requirements</h2>
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