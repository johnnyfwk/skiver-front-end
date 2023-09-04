import { Helmet } from 'react-helmet';
import TravelInput from '../components/TravelInput';

export default function Home({
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
    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://skiver.co.uk/" />
                <title>Get travel information for cities around the world • Skiver</title>
                <meta name="description" content="Get entry requirements, flight, accommodation, weather, and events information for cities around the world." />
            </Helmet>

            <TravelInput
                departureAirportInputLabel={departureAirportInputLabel}
                departureAirportInputName={departureAirportInputName}
                departureAirportInputPlaceholder={departureAirportInputPlaceholder}
                departureAirportInput={departureAirportInput}
                setDepartureAirportInput={setDepartureAirportInput}
                arrivalAirportInputLabel={arrivalAirportInputLabel}
                arrivalAirportInputName={arrivalAirportInputName}
                arrivalAirportInputPlaceholder={arrivalAirportInputPlaceholder}
                arrivalAirportInput={arrivalAirportInput}
                setArrivalAirportInput={setArrivalAirportInput}
            />

            <main>
                <h2>Home</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend porta sapien, eget interdum mauris pharetra eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent imperdiet non dolor eu ornare. Pellentesque malesuada enim sit amet hendrerit porttitor. In ullamcorper vitae urna eget rutrum. Phasellus sapien eros, commodo at libero eu, varius maximus leo. Vestibulum a dui consectetur, viverra nibh quis, accumsan justo. Cras ullamcorper, est at feugiat congue, nunc erat viverra felis, sed tincidunt lorem dui mattis justo.</p>
                <p>Duis id nunc a nulla porttitor venenatis a sodales lorem. Etiam elementum gravida sapien in maximus. Proin vestibulum velit ultrices accumsan interdum. Sed bibendum velit mauris, malesuada hendrerit magna maximus vitae. Donec pellentesque ipsum vitae nunc porttitor vestibulum. Integer placerat ornare bibendum. Mauris accumsan nec nisi mollis dictum. In nec lorem eros. Fusce ultrices varius nunc vel imperdiet.</p>
            </main>
        </div>
    )
}