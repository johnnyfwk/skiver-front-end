import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import TravelInput from '../components/TravelInput';
import airports from '../assets/data/airports';
import * as api from '../api';
import BarChart from '../components/BarChart';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

export default function Destination({
    originAirportInputLabel,
    originAirportInputName,
    originAirportInputPlaceholder,
    originAirportInput,
    setOriginAirportInput,
    destinationAirportInputLabel,
    destinationAirportInputName,
    destinationAirportInputPlaceholder,
    destinationAirportInput,
    setDestinationAirportInput
}) {
    const { destination_airport_id } = useParams();
    const { origin_airport_id } = useParams();

    const [originAirport, setOriginAirport] = useState(airports.filter((airport) => airport.objectID.toLowerCase() === origin_airport_id.toLowerCase()));
    const [destinationAirport, setDestinationAirport] = useState(airports.filter((airport) => airport.objectID.toLowerCase() === destination_airport_id.toLowerCase()));

    const [originCountryInfo, setOriginCountryInfo] = useState(null);
    const [destinationCountryInfo, setDestinationCountryInfo] = useState(null);
    const [destinationCityInfo, setDestinationCityInfo] = useState(null);

    const [emergencyNumbersAll, setEmergencyNumbersAll] = useState(null);
    const [emergencyNumbersPolice, setEmergencyNumbersPolice] = useState(null);
    const [emergencyNumbersAmbulance, setEmergencyNumbersAmbulance] = useState(null);
    const [emergencyNumbersFire, setEmergencyNumbersFire] = useState(null);

    const [cityPhotos, setCityPhotos] = useState(null);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [isFullSizeCityPhotoVisible, setIsFullSizeCityPhotoVisible] = useState(false);

    const [currencyExchangeRate, setCurrencyExchangeRate] = useState(null);

    const [weatherForecast, setWeatherForecast] = useState(null);

    const [holidays, setHolidays] = useState(null);

    const [govUKForeignTravelAdvice, setGovUKForeignTravelAdvice] = useState({});
    const [govUKForeignTravelAdviceEntryRequirements, setGovUKForeignTravelAdviceEntryRequirements] = useState("");

    function getCurrencyExchange(baseCurrency, targetCurrency) {
        api.freeCurrencyAPI(baseCurrency, targetCurrency)
            .then((response) => {
                setCurrencyExchangeRate({
                    baseCurrency: baseCurrency,
                    targetCurrencyAndRate: response
                });
            })
            .catch((error) => {
                setCurrencyExchangeRate(null);
            })
    }

    function getEmergencyNumbers(countryCode) {
        api.emergencyNumbersAPI(countryCode)
            .then((response) => {
                setEmergencyNumbersAll(response.data.dispatch.all[0]);
                setEmergencyNumbersPolice(response.data.police.all[0]);
                setEmergencyNumbersAmbulance(response.data.ambulance.all[0]);
                setEmergencyNumbersFire(response.data.fire.all[0]);
            })
            .catch((error) => {
                setEmergencyNumbersAll(null);
                setEmergencyNumbersPolice(null);
                setEmergencyNumbersAmbulance(null);
                setEmergencyNumbersFire(null);
            })
    }

    function mapbox(latitude, longitude) {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2tpdmVyIiwiYSI6ImNsbWJzMHZ6cjA3bDMza3A0dXNvMzd2MTUifQ.CNPHYPg_roixMB4IfSlBWw';
        var map = new mapboxgl.Map({
            container: "mapbox-container",
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [longitude, latitude],
            zoom: 12
        });
    }

    useEffect(() => {
        const date = new Date();
        setGovUKForeignTravelAdvice({});
        setGovUKForeignTravelAdviceEntryRequirements("");
        const originAirportInfo = airports.filter((airport) => airport.objectID.toLowerCase() === origin_airport_id.toLowerCase())
        setOriginAirport(originAirportInfo);
        const destinationAirportInfo = airports.filter((airport) => airport.objectID.toLowerCase() === destination_airport_id.toLowerCase());
        setDestinationAirport(destinationAirportInfo);

        // Entry Requirements
        if (originAirportInfo[0].country === "United Kingdom") {
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

        // Country Information
        api.restCountries(originAirportInfo[0].country)
            .then((response) => {
                const infoForOriginCountry = response.filter((country) => {
                    return country.name.common === originAirportInfo[0].country || country.name.official === originAirportInfo[0].country;
                })
                setOriginCountryInfo(infoForOriginCountry);
                return api.restCountries(destinationAirportInfo[0].country)
            })
            .then((response) => {
                const infoForDestinationCountry = response.filter((country) => {
                    return country.name.common === destinationAirportInfo[0].country || country.name.official === destinationAirportInfo[0].country;
                })
                setDestinationCountryInfo(infoForDestinationCountry);
                getEmergencyNumbers(infoForDestinationCountry[0].cca2) // Calls function to get emergency numbers
                setOriginCountryInfo((currentOriginCountryInfo) => {
                    if (Object.keys(currentOriginCountryInfo[0].currencies)[0] !== Object.keys(infoForDestinationCountry[0].currencies)[0]) {
                        getCurrencyExchange(Object.keys(currentOriginCountryInfo[0].currencies)[0], Object.keys(infoForDestinationCountry[0].currencies)[0]); // Calls function to get currency exchange rate
                        return currentOriginCountryInfo;
                    } else {
                        setCurrencyExchangeRate(null);
                    }
                })
            })
            .catch((error) => {
                setOriginCountryInfo(null);
                setDestinationCountryInfo(null);
            })
        // Country Information

        // City Information
        setDestinationCityInfo(null)
        api.cityAPI(destinationAirportInfo[0].city)
            .then((response) => {
                setDestinationCityInfo(response);
                mapbox(response[0].latitude, response[0].longitude); // Render mapbox
            })
            .catch((error) => {
                setDestinationCityInfo(null);
            })
        // City Information

        // Photos of city
        api.pexels(destinationAirportInfo[0].city)
            .then((response) => {
                const pexelsPhotos = [];
                response.map((photo) => {
                    const photoObject = {...photo};
                    photoObject.site = "Pexels";
                    pexelsPhotos.push(photoObject)
                })
                setCityPhotos(pexelsPhotos);
            })
            .catch((error) => {
                setCityPhotos(null);
            })
        // Photos of city

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
                setWeatherForecast(null);
            })
        // Weather Forecast

        // Holidays
        api.holidaysAPI(destinationAirportInfo[0].country, date.getFullYear())
            .then((response) => {
                setHolidays(response);
                return api.holidaysAPI(destinationAirportInfo[0].country, date.getFullYear() + 1)
            })
            .then((response) => {
                setHolidays((currentHolidays) => {
                    const holidaysForBothYears = [...currentHolidays, ...response].sort((a, b) => {
                        return new Date(a.date) - new Date(b.date);
                    })
                    const holidaysForBothYearsUniques = holidaysForBothYears.filter((holiday) => holiday.country === destinationAirportInfo[0].country);
                    return holidaysForBothYearsUniques;
                })
            })
            .catch((error) => {
                setHolidays(null);
            })
        // Holidays
    }, [destination_airport_id, origin_airport_id])

    function handleCityPhoto(event) {
        setIsFullSizeCityPhotoVisible((currentFullSizeCityPhotoVisibility) => !currentFullSizeCityPhotoVisibility);
        const photo = {};
        photo.fullSizePhotoSrc = event.target.attributes.srcfullsize.value ? event.target.attributes.srcfullsize.value : "";
        photo.alt = event.target.attributes.alt.value ? event.target.attributes.alt.value : "";
        photo.photoUrl = event.target.attributes.photourl.value ? event.target.attributes.photourl.value : "";
        photo.site = event.target.attributes.site.value ? event.target.attributes.site.value : "";
        photo.photographerName = event.target.attributes.photographername.value ? event.target.attributes.photographername.value : "";
        photo.photographerUrl = event.target.attributes.photographerurl.value ? event.target.attributes.photographerurl.value : "";
        setSelectedPhoto(photo);
    }

    function handleFullSizePhotoContainer() {
        setIsFullSizeCityPhotoVisible((currentFullSizeCityPhotoVisibility) => !currentFullSizeCityPhotoVisibility);
    }

    function handleFullSizePhotoBackground() {
        setIsFullSizeCityPhotoVisible((currentFullSizeCityPhotoVisibility) => !currentFullSizeCityPhotoVisibility);
    }

    const styleMapboxContainer = {
        width: "100%",
        height: "400px"
    }

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={`https://skiver.co.uk/destination/${destination_airport_id}`} />
                <title>Travel information for {destinationAirport[0].city}, {destinationAirport[0].country} • Skiver</title>
                <meta name="description" content={`Emergency numbers, entry requirements, currency converter, weather forecast, and holidays information for ${destinationAirport[0].city}, ${destinationAirport[0].country}.`} />
            </Helmet>

            <TravelInput
                originAirportInputLabel={originAirportInputLabel}
                originAirportInputName={originAirportInputName}
                originAirportInputPlaceholder={originAirportInputPlaceholder}
                originAirportInput={originAirportInput}
                setOriginAirportInput={setOriginAirportInput}
                destinationAirportInputLabel={destinationAirportInputLabel}
                destinationAirportInputName={destinationAirportInputName}
                destinationAirportInputPlaceholder={destinationAirportInputPlaceholder}
                destinationAirportInput={destinationAirportInput}
                setDestinationAirportInput={setDestinationAirportInput}
            />

            <main>
                <h2>{destinationAirport[0].city}, {destinationAirport[0].country}</h2>

                <section>
                    <p>Travelling from {originAirport[0].city}, {originAirport[0].country}.</p>
                    <div id="mapbox-container" style={styleMapboxContainer}></div>
                </section>
                
                {destinationCountryInfo ||
                emergencyNumbersAll ||
                emergencyNumbersPolice ||
                emergencyNumbersAmbulance ||
                emergencyNumbersFire ||
                cityPhotos ||
                currencyExchangeRate ||
                weatherForecast ||
                govUKForeignTravelAdviceEntryRequirements ||
                holidays
                    ? <section>
                        <h2>Contents</h2>
                        <ul>
                            {destinationCountryInfo
                                ? <li><a href="#general-information">General Information</a></li>
                                : null
                            }
                            {emergencyNumbersAll || emergencyNumbersPolice || emergencyNumbersAmbulance || emergencyNumbersFire
                                ? <li><a href="#emergency-numbers">Emergency Numbers</a></li>
                                : null
                            }
                            {currencyExchangeRate
                                ? <li><a href="#currency-exchange-rate">Currency Exchange Rate</a></li>
                                : null
                            }
                            {weatherForecast
                                ? <li><a href="#weather-forecast">Weather Forecast</a></li>
                                : null
                            }
                            {cityPhotos
                                ? <li><a href="#city-photos">Photos</a></li>
                                : null
                            }
                            {govUKForeignTravelAdviceEntryRequirements
                                ? <li><a href="#entry-requirements">Entry Requirements for UK Travellers</a></li>
                                : null
                            }
                            {holidays
                                ? <li><a href="#holidays">Holidays</a></li>
                                : null
                            }
                        </ul>
                    </section>
                    : <div>No information to display</div>
                }

                {destinationCountryInfo
                    ? <section id="general-information">
                        <h2>General Information</h2>
                        <p><b>Sources</b>: <a href="https://restcountries.com" target="_blank" rel="noopener noreferrer">restcountries.com</a>, <a href="https://api-ninjas.com/api/city" target="_blank" rel="noopener noreferrer">api-ninjas.com/api/city</a></p>
                        <img src={destinationCountryInfo[0].flags.svg} alt={destinationCountryInfo[0].flags.alt} />
                        {destinationCityInfo
                            ? <p><b>Population</b>: {destinationCityInfo[0].population.toLocaleString()}</p>
                            : null
                        }
                        <p><b>Languages</b>: {Object.values(destinationCountryInfo[0].languages).join(", ")}</p>
                        <p><b>Currency</b>: {Object.values(destinationCountryInfo[0].currencies).map((currency) => currency.name).join(", ")} ({Object.keys(destinationCountryInfo[0].currencies)[0]})</p>
                        <p><b>Continent</b>: {destinationCountryInfo[0].continents.join(", ")}</p>
                    </section>
                    : null
                }

                {emergencyNumbersAll || emergencyNumbersPolice || emergencyNumbersAmbulance || emergencyNumbersFire
                    ? <section>
                        <h2 id="emergency-numbers">Emergency Numbers</h2>
                        <p><b>Source</b>: <a href="https://emergencynumberapi.com/" target="_blank" rel="noopener noreferrer">emergencynumberapi.com</a></p>
                        {emergencyNumbersAll
                            ? <div>
                                <p><b>Police</b>: {emergencyNumbersAll}</p>
                                <p><b>Ambulance</b>: {emergencyNumbersAll}</p>
                                <p><b>Fire</b>: {emergencyNumbersAll}</p>
                            </div>
                            : <div>
                                {emergencyNumbersPolice
                                    ? <p><b>Police</b>: {emergencyNumbersPolice}</p>
                                    : null
                                }
                                {emergencyNumbersAmbulance
                                    ? <p><b>Ambulance</b>: {emergencyNumbersAmbulance}</p>
                                    : null
                                }
                                {emergencyNumbersFire
                                    ? <p><b>Fire</b>: {emergencyNumbersFire}</p>
                                    : null
                                }
                            </div>
                        }
                    </section>
                    : null
                }

                {currencyExchangeRate
                    ? <section>
                        <h2 id="currency-exchange-rate">Currency Exchange Rate</h2>
                        <p><b>Source</b>: <a href="https://freecurrencyapi.com/" target="_blank" rel="noopener noreferrer">freecurrencyapi.com</a></p>
                        <p>1 {currencyExchangeRate.baseCurrency} = {Object.values(currencyExchangeRate.targetCurrencyAndRate)[0]} {Object.keys(currencyExchangeRate.targetCurrencyAndRate)[0]}</p>
                    </section>
                    : null
                }

                {weatherForecast
                    ? <section>
                        <h2 id="weather-forecast">Weather Forecast (10 days)</h2>
                        <p><b>Source</b>: <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">open-meteo.com</a></p>
                        <p>Temperatures in {weatherForecast[0].maxTempUnits}.</p>
                        <BarChart data={weatherForecast} />
                    </section>
                    : null
                }

                {cityPhotos
                    ? <section>
                        <h2 id="city-photos">Photos</h2>
                        <div id="city-photos-container">
                            {cityPhotos.map((photo, index) => {
                                return (
                                    <img
                                        key={index}
                                        className="city-photo-preview"
                                        photourl={photo.url}
                                        site={photo.site}
                                        src={photo.src.medium}
                                        srcfullsize={photo.src.large2x}
                                        photographername={photo.photographer}
                                        photographerurl={photo.photographer_url}
                                        alt={photo.alt}
                                        loading="lazy"
                                        onClick={handleCityPhoto}
                                    />
                                )
                            })}
                        </div>
                    </section>
                    : null
                }

                {isFullSizeCityPhotoVisible
                    ? <div id="full-size-photo-container" onClick={handleFullSizePhotoContainer}>
                        <div id="full-size-photo-name">{selectedPhoto.alt}</div>
                        <img src={selectedPhoto.fullSizePhotoSrc} alt={selectedPhoto.alt} />
                        <div>Photo by <a href={selectedPhoto.photographerUrl} target="_blank" rel="noopener noreferrer">{selectedPhoto.photographerName}</a> from <a href={selectedPhoto.photoUrl} target="_blank" rel="noopener noreferrer">{selectedPhoto.site}</a></div>
                    </div>
                    : null
                }

                {isFullSizeCityPhotoVisible
                    ? <div id="full-size-photo-background" onClick={handleFullSizePhotoBackground}></div>
                    : null
                }

                {govUKForeignTravelAdviceEntryRequirements
                    ? <section>
                        <h2 id="entry-requirements">Entry Requirements for UK Travellers</h2>
                        <p><b>Source</b>: <a href={`https://gov.uk/${govUKForeignTravelAdvice.base_path}`} target="_blank" rel="noopener noreferrer">GOV.UK</a></p>
                        <div
                            dangerouslySetInnerHTML={{ __html: govUKForeignTravelAdviceEntryRequirements }}
                            className="body"
                        />
                    </section>
                    : null
                }

                {holidays
                    ? <section>
                        <h2 id="holidays">Holidays</h2>
                        <p><b>Source</b>: <a href="https://api-ninjas.com/api/holidays" target="_blank" rel="noopener noreferrer">api-ninjas.com/api/holidays</a></p>
                        <p>A list of holidays in the selected destination country, including public, bank, and religious holidays.</p>
                        <div id="holidays-dates-container">
                            {holidays.map((holiday, index) => {
                                return (
                                    <p key={index}>{new Date(holiday.date).toLocaleDateString()} - {holiday.name}</p>
                                )
                            })}
                        </div>
                    </section>
                    : null
                }
            </main>
        </div>
    )
}