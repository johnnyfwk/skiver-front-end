import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://skiver.co.uk/privacy-policy" />
                <title>Privacy Policy • Skiver</title>
                <meta name="description" content="The privacy policy for Skiver.co.uk." />
            </Helmet>

            <header>
                <h1>Privacy Policy</h1>
                <p>Welcome to Skiver.co.uk ("the Website"). This Privacy Policy outlines how we collect, use, and protect information when you use the Website.</p>
            </header>

            <main>
                <h2>Information We Collect</h2>

                <h3>Personal Information</h3>
                <p>We do not collect personal information directly through the Website. However, please note that third-party APIs used to retrieve travel information may have their own data collection practices. We encourage users to review the privacy policies of these third-party providers.</p>

                <h3>Log Data</h3>
                <p>We may collect information that your browser sends whenever you visit the Website ("Log Data"). This may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, pages of our Website that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

                {/* <h2>Use of Cookies</h2>
                <p>The Website may use "cookies" to enhance your user experience. You have the option to accept or decline cookies. If you choose to decline cookies, you may not be able to fully experience the features of the Website.</p> */}

                <h2>Third-Party Links</h2>
                <p>The Website may contain links to external sites. We are not responsible for the content or privacy practices of these external sites. We encourage users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>

                <h2>Data Security</h2>
                <p>While we strive to protect your personal information, no method of transmission over the Internet or method of electronic storage is completely secure. We cannot guarantee the absolute security of your information.</p>

                <h2>Changes to this Privacy Policy</h2>
                <p>Skiver.co.uk may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Website. You are advised to review this Privacy Policy periodically for any changes.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at hi@skiver.co.uk.</p>

                <p>Last Updated: 10 September 2023</p>
            </main>
        </div>
    )
}