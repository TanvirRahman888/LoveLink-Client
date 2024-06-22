import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className="container mx-auto my-10 p-5">
            <Helmet>
                <title>LoveLink | About</title>
            </Helmet>
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-5">About Love Link</h1>
                <p className="text-lg mb-10">
                    Welcome to Love Link, your number one source for finding your perfect match. We're dedicated to providing you the very best of matchmaking services, with an emphasis on trust, security, and personal attention.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                    <p className="text-lg mb-5">
                        At Love Link, our mission is to connect people from all walks of life and help them find their soulmates. We believe in the power of love and the importance of companionship, and our goal is to make the journey of finding your significant other as smooth and enjoyable as possible.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-3">Our Values</h2>
                    <p className="text-lg mb-5">
                        We prioritize trust, integrity, and transparency in all our interactions. Our platform is designed with the highest standards of security to ensure your personal information remains confidential. We are committed to fostering a respectful and inclusive community where everyone feels valued and respected.
                    </p>
                </div>
            </div>

            <div className="my-10">
                <h2 className="text-2xl font-bold mb-3">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="text-center">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member 1" className="rounded-full mx-auto mb-3" />
                        <h3 className="text-xl font-semibold">John Doe</h3>
                        <p className="text-lg">Founder & CEO</p>
                        <p className="text-md mt-2">John is the visionary behind Love Link, dedicated to creating a platform that brings people together and fosters meaningful relationships.</p>
                    </div>
                    <div className="text-center">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member 2" className="rounded-full mx-auto mb-3" />
                        <h3 className="text-xl font-semibold">Jane Smith</h3>
                        <p className="text-lg">Head of Customer Support</p>
                        <p className="text-md mt-2">Jane is committed to ensuring our users have the best possible experience, providing support and assistance whenever needed.</p>
                    </div>
                    <div className="text-center">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team Member 3" className="rounded-full mx-auto mb-3" />
                        <h3 className="text-xl font-semibold">Emily Johnson</h3>
                        <p className="text-lg">Lead Developer</p>
                        <p className="text-md mt-2">Emily leads our development team, constantly innovating to enhance our platform and introduce new features.</p>
                    </div>
                </div>
            </div>

            <div className="text-center my-10">
                <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
                <p className="text-lg mb-5">Have any questions? We'd love to hear from you!</p>
                <a href="mailto:support@lovelink.com" className="text-pink-500 underline">support@lovelink.com</a>
            </div>
        </div>
    );
};

export default About;