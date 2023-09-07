import axios from 'axios';

// Source: https://content-api.publishing.service.gov.uk/reference.html
export function getGovUKForeignTravelAdvice(country) {
    let countryCopy;
    if (country === "United States") {
        countryCopy = "USA";
    }
    else {
        countryCopy = country;
    }
    const countryAsSlug = convertCountryToSlug(countryCopy);

    const baseURL = "https://www.gov.uk/api/content/foreign-travel-advice/";
    return axios
        .get(baseURL + countryAsSlug)
        .then((response) => {
            return response.data;
        })
}

export function convertCountryToSlug(country) {
    return country.replaceAll(" ", "-").toLowerCase();
}

// Source: https://restcountries.com/
export function getInfoForDepartureAndDestinationCountries(country) {
    const baseURL = "https://restcountries.com/v3.1/all";
    return axios
        .get(baseURL)
        .then((response) => {
            return response.data;
        })
}

// Source: https://api.open-meteo.com
export function getOpenMateoWeatherForeCast(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=14`;

    return axios
        .get(url)
        .then((response) => {
            return response.data;
        })
}

export function getFreeCurrencyAPIExchangeRate(baseCurrency, targetCurrency) {
    const url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_UtsDQp4rrzZtoCXxgNQGPV1JHMn1uGy2bG1GXlfC&base_currency=${baseCurrency}&currencies=${targetCurrency}`;

    return axios(url)
        .then((response) => {
            return response.data.data;
        })
}