export function SimpleFooter() {
    return (
        <footer className="bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 text-black p-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-xl font-bold mb-3">About Love Link</h3>
                    <p className="text-gray-800">
                        Love Link is a platform dedicated to connecting hearts. Our mission is to help people find meaningful relationships.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-3">Quick Links</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="/" className="text-gray-800 hover:text-white">Home</a>
                        </li>
                        <li className="mb-2">
                            <a href="/about" className="text-gray-800 hover:text-white">About Us</a>
                        </li>
                        <li className="mb-2">
                            <a href="/contact" className="text-gray-800 hover:text-white">Contact Us</a>
                        </li>
                        <li className="mb-2">
                            <a href="/privacy" className="text-gray-800 hover:text-white">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                    <ul className="flex space-x-5">
                        <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-white">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12.07C22 6.63 17.5 2 12 2S2 6.63 2 12.07C2 16.74 5.65 20.54 10.09 21v-6.25H7.55v-3H10.1V9.41c0-2.51 1.44-3.89 3.65-3.89 1.06 0 2.17.18 2.17.18v2.48H14.8c-1.31 0-1.72.82-1.72 1.67v2.02h2.9l-.46 3H13.08V21c4.44-.46 8.09-4.26 8.09-8.93z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-white">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.954 4.569c-.885.391-1.83.656-2.825.775 1.014-.611 1.794-1.575 2.163-2.724-.95.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.917 2.2-4.917 4.917 0 .39.045.765.127 1.124C7.69 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.58-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.23-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.416-1.68 1.318-3.809 2.101-6.102 2.101-.395 0-.779-.023-1.17-.068 2.189 1.404 4.768 2.224 7.557 2.224 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.63.961-.695 1.8-1.562 2.46-2.549z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-white">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.41a4.92 4.92 0 0 1 1.79 1.11 4.917 4.917 0 0 1 1.11 1.788c.17.457.356 1.258.41 2.428.058 1.265.07 1.646.07 4.85s-.012 3.585-.07 4.85c-.054 1.17-.24 1.97-.41 2.428a4.92 4.92 0 0 1-1.11 1.79 4.917 4.917 0 0 1-1.788 1.11c-.457.17-1.258.356-2.428.41-1.265.058-1.646.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.41a4.902 4.902 0 0 1-1.79-1.11 4.906 4.906 0 0 1-1.11-1.788c-.17-.457-.356-1.258-.41-2.428-.058-1.265-.07-1.646-.07-4.85s.012-3.585.07-4.85c.054-1.17.24-1.97.41-2.427a4.915 4.915 0 0 1 1.11-1.79 4.922 4.922 0 0 1 1.788-1.11c.457-.17 1.258-.356 2.428-.41 1.265-.058 1.646-.07 4.85-.07zm0-2.163C8.71 0 8.329.013 7.053.07 5.782.127 4.725.32 3.907.68a7.078 7.078 0 0 0-2.573 1.63A7.09 7.09 0 0 0 .68 4.883c-.36.818-.553 1.875-.61 3.146C0 9.309 0 9.689 0 12s.013 2.691.07 3.967c.057 1.27.25 2.328.61 3.146a7.092 7.092 0 0 0 1.63 2.573 7.083 7.083 0 0 0 2.573 1.63c.818.36 1.875.553 3.146.61 1.276.057 1.656.07 3.967.07s2.691-.013 3.967-.07c1.27-.057 2.328-.25 3.146-.61a7.078 7.078 0 0 0 2.573-1.63 7.09 7.09 0 0 0 1.63-2.573c.36-.818.553-1.875.61-3.146.057-1.276.07-1.656.07-3.967s-.013-2.691-.07-3.967c-.057-1.27-.25-2.328-.61-3.146a7.09 7.09 0 0 0-1.63-2.573 7.078 7.078 0 0 0-2.573-1.63c-.818-.36-1.875-.553-3.146-.61C15.691 0 15.311 0 12 0z" />
                                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.163a4.001 4.001 0 1 1 0-8.002 4.001 4.001 0 0 1 0 8.002zm6.406-11.845a1.44 1.44 0 1 0 0-2.881 1.44 1.44 0 0 0 0 2.881z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-10 text-gray-500">
                &copy; {new Date().getFullYear()} Love Link. All rights reserved.
            </div>
        </footer>
    );
}