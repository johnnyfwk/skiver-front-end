import axios from 'axios';

export function getGovUKForeignTravelAdvice(country) {
    const baseURL = "https://www.gov.uk/api/content/foreign-travel-advice/";

    return axios
        .get(baseURL + country.toLowerCase())
        .then((response) => {
            return response.data;
        })
}