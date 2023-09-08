import { useState } from "react";

export default function AirportInput({
    airportInputLabel,
    airportInputName,
    airportInputPlaceholder,
    airportInput,
    setAirportInput,
    airports,
    setSelectedAirportId,
    setDestinationAirports
}) {
    const [airportsMatchingInput, setAirportsMatchingInput] = useState(null);

    function handleAirportInput(event) {
        setAirportInput(event.target.value);
        if (event.target.value) {
            const allMatchingAirports = airports.filter((airport) => {
                return airport.iata_code.toLowerCase().includes(event.target.value.toLowerCase()) ||
                airport.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                airport.city.toLowerCase().includes(event.target.value.toLowerCase()) ||
                airport.country.toLowerCase().includes(event.target.value.toLowerCase())
            })
            const matchingAirports = allMatchingAirports.slice(0, 10);
            setAirportsMatchingInput(matchingAirports);
        }
        else {
            setSelectedAirportId("");
            setAirportsMatchingInput([]);
        }
    }

    function handleMatchingAirport(event) {
        setAirportInput(event.target.attributes.name.value + " (" + event.target.attributes.code.value + "), " + event.target.attributes.city.value + ", " + event.target.attributes.country.value);
        setSelectedAirportId(event.target.attributes.id.value);
        setAirportsMatchingInput(null);
        if (airportInputLabel === "Origin:") {
            setDestinationAirports(airports.filter((airport) => {
                return airport.city !== event.target.attributes.city.value || airport.country !== event.target.attributes.country.value;
            }));
        }
    }

    return (
        <div className="airport-input">
            <label htmlFor={airportInputName}>{airportInputLabel}</label>
            
            <input
                type="text"
                id={airportInputName}
                name={airportInputName}
                value={airportInput}
                onChange={handleAirportInput}
                placeholder={airportInputPlaceholder}
                autoComplete="off"
            ></input>

            {!airportInput || airportsMatchingInput === null
                ? null
                : airportsMatchingInput.length === 0
                    ? <div className="matching-airports">No matching airports</div>
                    : <div className="matching-airports">
                        {airportsMatchingInput.map((airport) => {
                            return (
                                <div
                                    key={airport.objectID}
                                    onClick={handleMatchingAirport}
                                    id={airport.objectID}
                                    code={airport.iata_code}
                                    name={airport.name}
                                    city={airport.city}
                                    country={airport.country}
                                >{airport.name} ({airport.iata_code}), {airport.city}, {airport.country}</div>
                            )
                        })}
                </div>
            }
        </div>
    )
}