import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import TravelInput from './components/TravelInput';
import Destination from './pages/Destination';
import Footer from './components/Footer';

function App() {
    const departureAirportInputLabel = "Departure Airport:";
    const departureAirportInputName = "departure-airport-input";
    const departureAirportInputPlaceholder = "Enter departure airport";
    const [departureAirportInput, setDepartureAirportInput] = useState("");

    const arrivalAirportInputLabel = "Arrival Airport:";
    const arrivalAirportInputName = "arrival-airport-input";
    const arrivalAirportInputPlaceholder = "Enter arrival airport";
    const [arrivalAirportInput, setArrivalAirportInput] = useState("");

    return (
        <div className="App">
            <Logo
                setDepartureAirportInput={setDepartureAirportInput}
                setArrivalAirportInput={setArrivalAirportInput}
            />

            <Nav />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
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
                    }
                />
                <Route
                    path="/destination/:destination_airport_id/departure/:departure_airport_id"
                    element={
                        <Destination
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
                    }
                />
                <Route
                    path="/about"
                    element={
                        <About />
                    }
                />
            </Routes>

            <Footer
                setDepartureAirportInput={setDepartureAirportInput}
                setArrivalAirportInput={setArrivalAirportInput}
            />
        </div>
    );
}

export default App;