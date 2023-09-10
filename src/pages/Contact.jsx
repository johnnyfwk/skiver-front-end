import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://skiver.co.uk/contact" />
                <title>Contact • Skiver</title>
                <meta name="description" content="Get in touch with us if you have any queries or suggestions for us." />
            </Helmet>

            <header>
                <h1>Contact</h1>
            </header>

            <main>
                <p>If you have any questions or suggestions on how we can improve the site, get in touch with us at hi@skiver.co.uk.</p>
            </main>
        </div>
    )
}