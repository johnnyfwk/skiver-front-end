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
export function getRESTCountriesCountryInfo(country) {
    const baseURL = "https://restcountries.com/v3.1/all";
    return axios
        .get(baseURL)
            .then((response) => {
                return response.data;
            })}