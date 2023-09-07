import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
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

    const [departureAirport, setDepartureAirport] = useState(airports.filter((airport) => airport.objectID.toLowerCase() === departure_airport_id.toLowerCase()));
    const [destinationAirport, setDestinationAirport] = useState(airports.filter((airport) => airport.objectID.toLowerCase() === destination_airport_id.toLowerCase()));

    const [govUKForeignTravelAdvice, setGovUKForeignTravelAdvice] = useState({});
    const [govUKForeignTravelAdviceEntryRequirements, setGovUKForeignTravelAdviceEntryRequirements] = useState("");

    const [departureCountryInfo, setDepartureCountryInfo] = useState([]);
    const [destinationCountryInfo, setDestinationCountryInfo] = useState([]);

    const [currencyExchange, setCurrencyExchange] = useState([]);

    const [weatherForecast, setWeatherForecast] = useState({});

    function getCurrencyExchange(baseCurrency, targetCurrency) {
        api.getFreeCurrencyAPIExchangeRate(baseCurrency, targetCurrency)
            .then((response) => {
                setCurrencyExchange({
                    baseCurrency: baseCurrency,
                    targetCurrencyAndRate: response
                });
            })
            .catch((error) => {
                setCurrencyExchange([]);
            })
    }

    useEffect(() => {
        setGovUKForeignTravelAdvice({});
        setGovUKForeignTravelAdviceEntryRequirements("");
        const departureInfo = airports.filter((airport) => airport.objectID.toLowerCase() === departure_airport_id.toLowerCase())
        setDepartureAirport(departureInfo);
        const destinationInfo = airports.filter((airport) => airport.objectID.toLowerCase() === destination_airport_id.toLowerCase());
        setDestinationAirport(destinationInfo);

        // Entry Requirements
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
        // Entry Requirements

        // Country Information
        api.getInfoForDepartureAndDestinationCountries(departureInfo[0].country)
            .then((response) => {
                const infoForDepartureCountry = response.filter((country) => {
                    return country.name.common === departureInfo[0].country || country.name.official === departureInfo[0].country;
                })
                setDepartureCountryInfo(infoForDepartureCountry);
                return api.getInfoForDepartureAndDestinationCountries(destinationInfo[0].country)
            })
            .then((response) => {
                const infoForDestinationCountry = response.filter((country) => {
                    return country.name.common === destinationInfo[0].country || country.name.official === destinationInfo[0].country;
                })
                setDestinationCountryInfo(infoForDestinationCountry);
                setDepartureCountryInfo((currentDepartureCountryInfo) => {
                    if (Object.keys(currentDepartureCountryInfo[0].currencies)[0] !== Object.keys(infoForDestinationCountry[0].currencies)[0]) {
                        getCurrencyExchange(Object.keys(currentDepartureCountryInfo[0].currencies)[0], Object.keys(infoForDestinationCountry[0].currencies)[0]);
                        return currentDepartureCountryInfo;
                    } else {
                        setCurrencyExchange([]);
                    }
                })
            })
            .catch((error) => {
                setDepartureCountryInfo([]);
                setDestinationCountryInfo([]);
            })
        // Country Information

        // Weather Forecast
        api.getOpenMateoWeatherForeCast(destinationInfo[0]._geoloc.latitude, destinationInfo[0]._geoloc.longitude)
            .then((response) => {
                const weatherForecastInfo = [];
                for (let date = 0; date < response.daily.time.length; date++) {
                    weatherForecastInfo.push({
                        date: response.daily.time[date],
                        minTemp: response.daily.temperature_2m_min[date],
                        minTempUnits: response.daily_units.temperature_2m_min,
                        maxTemp: response.daily.temperature_2m_max[date],
                        maxTempUnits: response.daily_units.temperature_2m_max,
                        maxPrecipitationProbability: response.daily.precipitation_probability_max[date],
                        maxPrecipitationProbabilityUnits: response.daily_units.precipitation_probability_max
                    });
                }
                setWeatherForecast(weatherForecastInfo);
            })
            .catch((error) => {
                setWeatherForecast({});
            })
        // Weather Forecast
    }, [destination_airport_id, departure_airport_id])

    

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={`https://skiver.co.uk/destination/${destination_airport_id}`} />
                <title>Travel information for {destinationAirport[0].city}, {destinationAirport[0].country} • Skiver</title>
                <meta name="description" content={`Entry requirements, flight, accommodation, weather, and events information for ${destinationAirport[0].city}, ${destinationAirport[0].country}.`} />
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
                <h2>{departureAirport[0].city} ({departureAirport[0].country}) ---&gt; {destinationAirport[0].city} ({destinationAirport[0].country})</h2>

                {govUKForeignTravelAdviceEntryRequirements || destinationCountryInfo.length > 0
                    ? <section>
                        <h2>Contents</h2>
                        <ul>
                            {destinationCountryInfo.length > 0
                                ? <li><a href="#country-information">Country Information</a></li>
                                : null
                            }
                            {Object.keys(currencyExchange).length > 0
                                ? <li><a href="#currency-exchange">Currency Exchange</a></li>
                                : null
                            }
                            {weatherForecast.length > 0
                                ? <li><a href="#weather-forecast">Weather Forecast</a></li>
                                : null
                            }
                            {govUKForeignTravelAdviceEntryRequirements
                                ? <li><a href="#entry-requirements">Entry Requirements for UK Travellers</a></li>
                                : null
                            }
                        </ul>
                    </section>
                    : <div>No information to display</div>
                }

                {destinationCountryInfo.length > 0
                    ? <section id="country-information">
                        <h2>Country Information</h2>
                        <img src={destinationCountryInfo[0].flags.svg} alt={destinationCountryInfo[0].flags.alt} />
                        <div><b>Population</b>: {destinationCountryInfo[0].population.toLocaleString()}</div>
                        <div><b>Languages</b>: {Object.values(destinationCountryInfo[0].languages).join(", ")}</div>
                        <div><b>Currency</b>: {Object.values(destinationCountryInfo[0].currencies).map((currency) => currency.name).join(", ")} ({Object.keys(destinationCountryInfo[0].currencies)[0]})</div>
                        <div><b>Continent</b>: {destinationCountryInfo[0].continents.join(", ")}</div>
                    </section>
                    : null
                }

                {Object.keys(currencyExchange).length > 0
                    ? <section>
                        <h2 id="currency-exchange">Currency Exchange</h2>
                        <p>1 {currencyExchange.baseCurrency} = {Object.values(currencyExchange.targetCurrencyAndRate)[0]} {Object.keys(currencyExchange.targetCurrencyAndRate)[0]}</p>
                    </section>
                    : null
                }

                {weatherForecast.length > 0
                    ? <section>
                        <h2 id="weather-forecast">Weather Forecast (14 days)</h2>
                        <div id="weather-forecast-hour-and-temperature">
                            {weatherForecast.map((date) => {
                                return (
                                    <div key={date.date}>
                                        <div key={date.date}>{new Date(date.date).toDateString()}</div>
                                        <div>Min: {date.minTemp}{date.minTempUnits}</div>
                                        <div>Max: {date.maxTemp}{date.maxTempUnits}</div>
                                        {date.maxPrecipitationProbability
                                            ? <div>Chance of rain: {date.maxPrecipitationProbability}{date.maxPrecipitationProbabilityUnits}</div>
                                            : <div>Chance of rain: Unknown</div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    : null
                }
                
                {govUKForeignTravelAdviceEntryRequirements
                    ? <section>
                        <h2 id="entry-requirements">Entry Requirements for UK Travellers</h2>
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