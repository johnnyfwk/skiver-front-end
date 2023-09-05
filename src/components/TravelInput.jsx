import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AirportInput from "./AirportInput";
import airports from "../assets/data/airports";

export default function TravelInput({
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
    const [selectedDepartureAirportId, setSelectedDepartureAirportId] = useState("");
    const [selectedArrivalAirportId, setSelectedArrivalAirportId] = useState("");
    const [destinationAirports, setDestinationAirports] = useState([]);

    const navigate = useNavigate();
    
    function handleSubmit(event) {
        event.preventDefault();
        navigate(`/destination/${selectedArrivalAirportId.toLowerCase()}/departure/${selectedDepartureAirportId.toLowerCase()}`);
        setDepartureAirportInput("");
        setArrivalAirportInput("");
        setSelectedDepartureAirportId("");
        setSelectedArrivalAirportId("");
    }

    function handleResetForm() {
        setDepartureAirportInput("");
        setArrivalAirportInput("");
        setSelectedDepartureAirportId("");
        setSelectedArrivalAirportId("");
    }

    return (
        <header>
            <h1>Get travel information for your holiday destination</h1>
            <p>Enter departure and arrival airports to get entry requirements, flight, accommodation, weather, and events information for your destination.</p>
            <form>
                <AirportInput
                    airportInputLabel={departureAirportInputLabel}
                    airportInputName={departureAirportInputName}
                    airportInputPlaceholder={departureAirportInputPlaceholder}
                    airportInput={departureAirportInput}
                    setAirportInput={setDepartureAirportInput}
                    airports={airports}
                    setSelectedAirportId={setSelectedDepartureAirportId}
                    setDestinationAirports={setDestinationAirports}
                />
                {selectedDepartureAirportId
                    ? <AirportInput
                        airportInputLabel={arrivalAirportInputLabel}
                        airportInputName={arrivalAirportInputName}
                        airportInputPlaceholder={arrivalAirportInputPlaceholder}
                        airportInput={arrivalAirportInput}
                        setAirportInput={setArrivalAirportInput}
                        airports={destinationAirports}
                        setSelectedAirportId={setSelectedArrivalAirportId}
                    />
                    : null
                }
                <input
                    type="submit"
                    value="Submit"
                    onClick={handleSubmit}
                    disabled={!selectedDepartureAirportId || !selectedArrivalAirportId}
                />
                <input
                    type="reset"
                    value="Reset"
                    onClick={handleResetForm}
                    disabled={!departureAirportInput && !arrivalAirportInput}
                />
            </form>
        </header>
    )
}