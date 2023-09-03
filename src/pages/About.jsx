import { Helmet } from 'react-helmet';

export default function About() {
    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://skiver.co.uk/about" />
                <title>About • Skiver</title>
                <meta name="description" content="This is the meta description for the About page." />
            </Helmet>

            <header>
                <h1>About</h1>
                <p>This is some text in the header.</p>
            </header>

            <main>
                <h2>Sub-heading</h2>
                <p>This is some text in the main.</p>
            </main>
        </div>
    )
}