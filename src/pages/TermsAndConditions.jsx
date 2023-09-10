import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
    return (
        <div id="terms-and-conditions">
            <Helmet>
                <link rel="canonical" href="https://skiver.co.uk/terms-and-conditions" />
                <title>Terms & Conditions • Skiver</title>
                <meta name="description" content="The terms and conditions for Skiver.co.uk." />
            </Helmet>

            <div id="header-container">
                <header className="max-width">
                    <h1>Terms & Conditions</h1>
                    <p>Welcome to Skiver.co.uk ("the Website"). By accessing or using the Website, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully. If you do not agree with these terms, you should not use the Website.</p>
                </header>
            </div>
        
            <div id="main-container">
                <main className="max-width">
                    <div className="text-container">
                        <h2>Use of Information</h2>
                        <p>The Website provides travel information sourced from third-party APIs. While we strive for accuracy and reliability, we cannot guarantee the completeness, accuracy, or timeliness of the information provided. Users are encouraged to verify information obtained from this Website with independent sources.</p>

                        <h2>Third-Party APIs</h2>
                        <p>The Website utilises third-party APIs to retrieve and display travel-related information. These APIs are subject to their respective terms of use and privacy policies. Users are encouraged to review and comply with those terms and policies.</p>

                        <h2>Intellectual Property</h2>
                        <p>All content, including text, graphics, logos, and images, is the property of Skiver.co.uk or its licensors and is protected by copyright laws. Unauthorised reproduction or distribution of this content is prohibited.</p>

                        <h2>User Conduct</h2>
                        <p>Users agree to use the Website for lawful and non-commercial purposes only. Any form of harassment, abuse, or illegal activity is strictly prohibited. Users must not attempt to gain unauthorised access to the Website or its systems.</p>

                        <h2>Privacy</h2>
                        <p>We respect the privacy of our users. Our Privacy Policy outlines how we collect, use, and disclose information. By using the Website, you consent to the practices described in the <Link to="privacy-policy">Privacy Policy</Link>.</p>

                        <h2>Limitation of Liability</h2>
                        <p>Skiver.co.uk and its affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Website or the information provided.</p>

                        <h2>Changes to Terms and Conditions</h2>
                        <p>Skiver.co.uk reserves the right to modify or replace these terms at any time. Any changes will be effective immediately upon posting. Continued use of the Website after any such changes constitutes acceptance of the new terms.</p>

                        <h2>Governing Law</h2>
                        <p>These terms and conditions are governed by the laws of the UK, without regard to its conflict of laws principles.</p>

                        <h2>Contact Us</h2>
                        <p>If you have any questions or concerns regarding these terms and conditions, please contact us at hi@skiver.co.uk.</p>

                        <p>Last Updated: 10 September 2023</p>
                    </div>
                </main>
            </div>
        </div>
    )
}