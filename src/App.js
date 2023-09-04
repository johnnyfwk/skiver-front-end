import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Home from './pages/Home';
import City from './pages/City';
import About from './pages/About';

function App() {
    const [cityInput, setCityInput] = useState("");
    const [citiesMatchingInput, setCitiesMatchingInput] = useState(null);
    const [selectedCity, setSelectedCity] = useState({});

    return (
        <div className="App">
            <Logo
                setCityInput={setCityInput}
                setCitiesMatchingInput={setCitiesMatchingInput}
                setSelectedCity={setSelectedCity}
            />
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            cityInput={cityInput}
                            setCityInput={setCityInput}
                            citiesMatchingInput={citiesMatchingInput}
                            setCitiesMatchingInput={setCitiesMatchingInput}
                            selectedCity={selectedCity}
                            setSelectedCity={setSelectedCity}
                        />
                } />
                <Route
                    path="/city"
                    element={
                        <City
                            cityInput={cityInput}
                            setCityInput={setCityInput}
                            citiesMatchingInput={citiesMatchingInput}
                            setCitiesMatchingInput={setCitiesMatchingInput}
                        />
                    }
                />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;