import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';

function App() {
    const [cityEntered, setCityEntered] = useState("");
    const [citiesMatchingCityEntered, setCitiesMatchingCityEntered] = useState([]);
    const [selectedCity, setSelectedCity] = useState({});

    return (
        <div className="App">
            <Logo
                setCityEntered={setCityEntered}
                setCitiesMatchingCityEntered={setCitiesMatchingCityEntered}
                setSelectedCity={setSelectedCity}
            />
            <Nav />
            <Routes>
                <Route path="/" element={
                    <Home
                        cityEntered={cityEntered}
                        setCityEntered={setCityEntered}
                        citiesMatchingCityEntered={citiesMatchingCityEntered}
                        setCitiesMatchingCityEntered={setCitiesMatchingCityEntered}
                        selectedCity={selectedCity}
                        setSelectedCity={setSelectedCity}
                    />
                }></Route>
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;