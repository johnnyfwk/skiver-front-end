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
export function restCountries(country) {
    const baseURL = "https://restcountries.com/v3.1/all";
    return axios
        .get(baseURL)
        .then((response) => {
            return response.data;
        })
}

// Source: https://api.open-meteo.com
export function openMateo(latitude, longitude) {
    const url =`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=GMT&forecast_days=10`;

    return axios
        .get(url)
        .then((response) => {
            return response.data;
        })
}

export function freeCurrencyAPI(baseCurrency, targetCurrency) {
    console.log(baseCurrency, "<------ baseCurrency")
    console.log(targetCurrency, "<------ targetCurrency")
    const url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_UtsDQp4rrzZtoCXxgNQGPV1JHMn1uGy2bG1GXlfC&base_currency=${baseCurrency}&currencies=${targetCurrency}`;

    return axios(url)
        .then((response) => {
            return response.data.data;
        })
}

export function cityAPI(city) {
    const url = 'https://api.api-ninjas.com/v1/city?name=' + city;
    const headers = {
        'X-Api-Key': '+kV19tA+YAIHqcM2Ogf8Ww==BEAEmOPlpP7Tc0KM'
    };
    
    return axios.get(url, { headers })
        .then(response => {
            return response.data;
        })
}

export function holidaysAPI(country, year) {
    const url = 'https://api.api-ninjas.com/v1/holidays?country=' + country + `&year=` + year;
    const headers = {
        'X-Api-Key': '+kV19tA+YAIHqcM2Ogf8Ww==BEAEmOPlpP7Tc0KM'
    };
    
    return axios.get(url, { headers })
        .then(response => {
            return response.data;
        })
}