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
        window.scrollTo(0, 0);
    }

    function handleResetForm() {
        setOriginAirportInput("");
        setDestinationAirportInput("");
        setSelectedOriginAirportId("");
        setSelectedDestinationAirportId("");
    }

    return (
        <div id="travel-input-container">
            <div id="travel-input" className="max-width">
                <div id="travel-input-main-heading">Get travel information for your holiday destination</div>
                <p>Enter origin and destination airports to get travel and destination information.</p>
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
                    <div className="buttons">
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
                    </div>
                </form>
                <div id="travel-input-photo-credit">Photo by <a href="https://unsplash.com/@zacong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Zac Ong</a> on <a href="https://unsplash.com/photos/JHN1-mpgXjo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a></div>
            </div>
        </div>
    )
}