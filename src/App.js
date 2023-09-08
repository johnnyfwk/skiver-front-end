import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Destination from './pages/Destination';
import Footer from './components/Footer';

function App() {
    const originAirportInputLabel = "Origin Airport:";
    const originAirportInputName = "origin-airport-input";
    const originAirportInputPlaceholder = "Enter origin airport";
    const [originAirportInput, setOriginAirportInput] = useState("");

    const destinationAirportInputLabel = "Destination Airport:";
    const destinationAirportInputName = "destination-airport-input";
    const destinationAirportInputPlaceholder = "Enter destination airport";
    const [destinationAirportInput, setDestinationAirportInput] = useState("");

    return (
        <div className="App">
            <Logo
                setOriginAirportInput={setOriginAirportInput}
                setDestinationAirportInput={setDestinationAirportInput}
            />

            <Nav />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
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
                    }
                />
                <Route
                    path="/destination/:destination_airport_id/origin/:origin_airport_id"
                    element={
                        <Destination
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
                setOriginAirportInput={setOriginAirportInput}
                setDestinationAirportInput={setDestinationAirportInput}
            />
        </div>
    );
}

export default App;