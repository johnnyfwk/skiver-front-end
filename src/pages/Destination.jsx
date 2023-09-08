import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import TravelInput from '../components/TravelInput';
import airports from '../assets/data/airports';
import * as api from '../api';
import BarChart from '../components/BarChart';
import travelPhrases from '../assets/data/travelPhrases';
import languagesWithCodes from '../assets/data/languageCodes';

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

    const [departureCountryInfo, setDepartureCountryInfo] = useState([]);
    const [destinationCountryInfo, setDestinationCountryInfo] = useState([]);

    const [destinationCityInfo, setDestinationCityInfo] = useState([]);

    const [govUKForeignTravelAdvice, setGovUKForeignTravelAdvice] = useState({});
    const [govUKForeignTravelAdviceEntryRequirements, setGovUKForeignTravelAdviceEntryRequirements] = useState("");

    const [currencyExchange, setCurrencyExchange] = useState([]);

    const [weatherForecast, setWeatherForecast] = useState([]);

    function getCurrencyExchange(baseCurrency, targetCurrency) {
        api.freeCurrencyAPI(baseCurrency, targetCurrency)
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
        const departureAirportInfo = airports.filter((airport) => airport.objectID.toLowerCase() === departure_airport_id.toLowerCase())
        setDepartureAirport(departureAirportInfo);
        const destinationAirportInfo = airports.filter((airport) => airport.objectID.toLowerCase() === destination_airport_id.toLowerCase());
        setDestinationAirport(destinationAirportInfo);

        // Entry Requirements
        if (departureAirportInfo[0].country === "United Kingdom") {
            api.getGovUKForeignTravelAdvice(destinationAirportInfo[0].country)
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

        // City Information
        api.cityAPI(destinationAirport[0].city)
            .then((response) => {
                setDestinationCityInfo(response);
            })
            .catch((error) => {
                setDestinationCityInfo([]);
            })
        // City Information

        // Country Information
        api.restCountries(departureAirportInfo[0].country)
            .then((response) => {
                const infoForDepartureCountry = response.filter((country) => {
                    return country.name.common === departureAirportInfo[0].country || country.name.official === departureAirportInfo[0].country;
                })
                setDepartureCountryInfo(infoForDepartureCountry);
                return api.restCountries(destinationAirportInfo[0].country)
            })
            .then((response) => {
                const infoForDestinationCountry = response.filter((country) => {
                    return country.name.common === destinationAirportInfo[0].country || country.name.official === destinationAirportInfo[0].country;
                })
                setDestinationCountryInfo(infoForDestinationCountry);
                setDepartureCountryInfo((currentDepartureCountryInfo) => {
                    if (Object.keys(currentDepartureCountryInfo[0].currencies)[0] !== Object.keys(infoForDestinationCountry[0].currencies)[0]) {
                        // Calls function to get currency exchange rate
                        getCurrencyExchange(Object.keys(currentDepartureCountryInfo[0].currencies)[0], Object.keys(infoForDestinationCountry[0].currencies)[0]);
                        return currentDepartureCountryInfo;
                        // Calls function to get currency exchange rate
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
        api.openMateo(destinationAirportInfo[0]._geoloc.latitude, destinationAirportInfo[0]._geoloc.longitude)
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
                <h2>{destinationAirport[0].city}, {destinationAirport[0].country}</h2>
                <p>Travelling from {departureAirport[0].city}, {departureAirport[0].country}.</p>

                {destinationCountryInfo.length > 0 ||
                Object.keys(currencyExchange).length > 0 ||
                weatherForecast.length > 0 ||
                govUKForeignTravelAdviceEntryRequirements
                    ? <section>
                        <h2>Contents</h2>
                        <ul>
                            {destinationCountryInfo.length > 0
                                ? <li><a href="#general-information">General Information</a></li>
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
                    ? <section id="general-information">
                        <h2>General Information</h2>
                        <img src={destinationCountryInfo[0].flags.svg} alt={destinationCountryInfo[0].flags.alt} />
                        {destinationCityInfo.length > 0
                            ? <div><b>Population</b>: {destinationCityInfo[0].population.toLocaleString()}</div>
                            : null
                        }
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
                        <h2 id="weather-forecast">Weather Forecast (10 days)</h2>
                        <div>Temperatures in {weatherForecast[0].maxTempUnits}.</div>
                        <BarChart data={weatherForecast} />
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