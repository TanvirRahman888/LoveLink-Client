import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div className="container mx-auto my-10 p-5">
            <Helmet>
                <title>LoveLink | Contact</title>
            </Helmet>
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-lg mt-3">We'd love to hear from you! Please reach out with any questions, comments, or feedback.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-2xl font-bold mb-3">Get in Touch</h2>
                    <p className="text-lg mb-5">
                        Whether you have a question about our services, pricing, need a demo, or anything else, our team is ready to answer all your questions.
                    </p>
                    <div className="mb-5">
                        <h3 className="text-xl font-semibold">Email</h3>
                        <p className="text-lg"><a href="mailto:support@lovelink.com" className="text-pink-500 underline">support@lovelink.com</a></p>
                    </div>
                    <div className="mb-5">
                        <h3 className="text-xl font-semibold">Phone</h3>
                        <p className="text-lg"><a href="tel:+1234567890" className="text-pink-500 underline">+1 234 567 890</a></p>
                    </div>
                    <div className="mb-5">
                        <h3 className="text-xl font-semibold">Address</h3>
                        <p className="text-lg">123 Love Link Street, Heartsville, USA</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-3">Send Us a Message</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-200"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-200"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-semibold mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-200"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-lg font-semibold text-white bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none focus:ring focus:ring-pink-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Contact;