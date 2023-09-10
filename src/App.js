import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Nav from './components/Nav';
import NavButton from './components/NavButton';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Destination from './pages/Destination';
import Footer from './components/Footer';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
    const [isNavVisible, setIsNavVisible] = useState(false);
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
            <div id="logo-nav-and-nav-button-container">
                <div id="logo-nav-and-nav-button"className="max-width">
                    <Logo
                        setIsNavVisible={setIsNavVisible}
                        setOriginAirportInput={setOriginAirportInput}
                        setDestinationAirportInput={setDestinationAirportInput}
                    />
                    <Nav
                        isNavVisible={isNavVisible}
                        setIsNavVisible={setIsNavVisible}
                    />
                    <NavButton
                        isNavVisible={isNavVisible}
                        setIsNavVisible={setIsNavVisible}
                    />
                </div>
            </div>
            
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
                    path="/origin/:origin_airport_id/destination/:destination_airport_id"
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
                <Route
                    path="/contact"
                    element={
                        <Contact />
                    }
                />
                <Route
                    path="/terms-and-conditions"
                    element={
                        <TermsAndConditions />
                    }
                />
                <Route
                    path="/privacy-policy"
                    element={
                        <PrivacyPolicy />
                    }
                />
            </Routes>

            <Footer
                setIsNavVisible={setIsNavVisible}
                setOriginAirportInput={setOriginAirportInput}
                setDestinationAirportInput={setDestinationAirportInput}
            />
        </div>
    );
}

export default App;