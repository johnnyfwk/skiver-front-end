import { Helmet } from 'react-helmet';
import TravelInput from '../components/TravelInput';

export default function Home({
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
    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://skiver.co.uk/" />
                <title>Get travel information for your holiday destinations • Skiver</title>
                <meta name="description" content="Get travel information for your holiday destination, including city and country information, entry requirements (UK travellers), currency exchange rates, holidays, and weather forecasts." />
            </Helmet>

            <TravelInput
                originAirportInputLabel={originAirportInputLabel}
                originAirportInputName={originAirportInputName}
                originAirportInputPlaceholder={originAirportInputPlaceholder}
                originAirportInput={originAirportInput}
                setOriginAirportInput={setOriginAirportInput}
                destinationAirportInputLabel={destinationAirportInputLabel}
                destinationAirportInputName={destinationAirportInputName}
                destinationAirportInputPlaceholder={destinationAirportInputPlaceholder}
                destinationAirportInput={destinationAirportInput}
                setDestinationAirportInput={setDestinationAirportInput}
            />
        </div>
    )
}