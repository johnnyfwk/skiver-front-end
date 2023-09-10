import axios from 'axios';
import { createClient } from 'pexels';
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export function convertCountryToSlug(country) {
    return country.replaceAll(" ", "-").toLowerCase();
}

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

export function restCountries(country) {
    const baseURL = "https://restcountries.com/v3.1/all";
    return axios
        .get(baseURL)
        .then((response) => {
            return response.data;
        })
}

export function openMateo(latitude, longitude) {
    const url =`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=GMT&forecast_days=10`;
    return axios
        .get(url)
        .then((response) => {
            return response.data;
        })
}

export function freeCurrencyAPI(baseCurrency, targetCurrency) {
    const apiKey = process.env.REACT_APP_FREE_CURRENCY_API;
    const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${baseCurrency}&currencies=${targetCurrency}`;
    return axios
        .get(url)
        .then((response) => {
            return response.data.data;
        })
}

export function cityAPI(city) {
    const apiKey = process.env.REACT_APP_API_NINJAS;
    const url = 'https://api.api-ninjas.com/v1/city?name=' + city;
    const headers = {
        'X-Api-Key': apiKey
    };
    return axios
        .get(url, { headers })
        .then(response => {
            return response.data;
        })
}

export function holidaysAPI(country, year) {
    const apiKey = process.env.REACT_APP_API_NINJAS;
    const url = 'https://api.api-ninjas.com/v1/holidays?country=' + country + `&year=` + year;
    const headers = {
        'X-Api-Key': apiKey
    };
    return axios
        .get(url, { headers })
        .then(response => {
            return response.data;
        })
}

export function emergencyNumbersAPI(countryCode) {
    const url = `https://emergencynumberapi.com/api/country/${countryCode}`;
    return axios
        .get(proxyUrl + url)
        .then((response) => {
            return response.data;
        })
}

export function pexels(query) {
    const apiKey = process.env.REACT_APP_PEXELS;
    const client = createClient(apiKey);
    return client.photos.search({ query, per_page: 80 })
        .then((response) => {
            return response.photos;
        });
}