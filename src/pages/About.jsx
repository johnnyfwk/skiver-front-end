import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://skiver.co.uk/about" />
                <title>About • Skiver</title>
                <meta name="description" content="Some information about Skiver.co.uk." />
            </Helmet>

            <header>
                <h1>About</h1>
            </header>

            <main>
                <p>If you're planning a holiday or going abroad, find information about your destination before you travel.</p>
                <p>Simply enter where you are travelling from and to and the site will provide information to help you plan your trip, including city and country information, currency exchange rates, weather forecasts, entry requirements for UK travellers, holidays, and photos of the city.</p>
                <p>If there is any information you would find useul but we don't provide it, <Link to="/contact">let us know</Link> and we'll do our best to include it.</p>
            </main>
        </div>
    )
}