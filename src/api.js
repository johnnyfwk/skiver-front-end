import axios from 'axios';

export function getGovUKForeignTravelAdvice(country) {
    const countryCopy = country;
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