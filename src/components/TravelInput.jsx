import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AirportInput from "./AirportInput";
import airports from "../assets/data/airports";

export default function TravelInput({
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
    const [selectedOriginAirportId, setSelectedOriginAirportId] = useState("");
    const [selectedDestinationAirportId, setSelectedDestinationAirportId] = useState("");
    const [destinationAirports, setDestinationAirports] = useState([]);

    const navigate = useNavigate();
    
    function handleSubmit(event) {
        event.preventDefault();
        navigate(`/origin/${selectedOriginAirportId.toLowerCase()}/destination/${selectedDestinationAirportId.toLowerCase()}`);
        setOriginAirportInput("");
        setDestinationAirportInput("");
        setSelectedOriginAirportId("");
        setSelectedDestinationAirportId("");
    }

    function handleResetForm() {
        setOriginAirportInput("");
        setDestinationAirportInput("");
        setSelectedOriginAirportId("");
        setSelectedDestinationAirportId("");
    }

    return (
        <header>
            <h1>Get travel information for your holiday destination</h1>
            <p>Enter origin and destination airports to get city and country information, entry requirements (UK travellers), currency exchange, and weather information for your destination.</p>
            <form>
                <AirportInput
                    airportInputLabel={originAirportInputLabel}
                    airportInputName={originAirportInputName}
                    airportInputPlaceholder={originAirportInputPlaceholder}
                    airportInput={originAirportInput}
                    setAirportInput={setOriginAirportInput}
                    airports={airports}
                    setSelectedAirportId={setSelectedOriginAirportId}
                    setDestinationAirports={setDestinationAirports}
                />
                {selectedOriginAirportId
                    ? <AirportInput
                        airportInputLabel={destinationAirportInputLabel}
                        airportInputName={destinationAirportInputName}
                        airportInputPlaceholder={destinationAirportInputPlaceholder}
                        airportInput={destinationAirportInput}
                        setAirportInput={setDestinationAirportInput}
                        airports={destinationAirports}
                        setSelectedAirportId={setSelectedDestinationAirportId}
                    />
                    : null
                }
                <input
                    type="submit"
                    value="Submit"
                    onClick={handleSubmit}
                    disabled={!selectedOriginAirportId || !selectedDestinationAirportId}
                />
                <input
                    type="reset"
                    value="Reset"
                    onClick={handleResetForm}
                    disabled={!originAirportInput && !destinationAirportInput}
                />
            </form>
        </header>
    )
}