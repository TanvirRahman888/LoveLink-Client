import SectionTitle from "../Common/SectionTitle";

const HowItWorks = () => {
    const steps = [
        {
            title: "Create Your Profile",
            description: "Sign up with your basic details and create a detailed profile to find the best matches.",
            icon: "https://cdn-icons-png.flaticon.com/512/6210/6210134.png", // Placeholder for icon
        },
        {
            title: "Browse Profiles",
            description: "Explore profiles of other members and find your potential matches based on your preferences.",
            icon: "https://cdn-icons-png.flaticon.com/512/8004/8004179.png", // Placeholder for icon
        },
        {
            title: "Connect",
            description: "Send interest or messages to members you like and start a conversation.",
            icon: "https://icons.veryicon.com/png/o/application/common-icons/connect-36.png", // Placeholder for icon
        },
        {
            title: "Find Your Match",
            description: "Engage in meaningful conversations and find the perfect match for you.",
            icon: "https://cdn-icons-png.flaticon.com/512/3869/3869492.png", // Placeholder for icon
        }
    ];

    return (
        <div className="text-center rounded-lg shadow-lg my-10 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 text-black p-10">
            <SectionTitle title={"Check the working process"} sortDescription={"How It Works"}></SectionTitle>
            <div className="flex flex-wrap justify-center gap-6">
                {steps.map((step, index) => (
                    <div key={index} className="bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2">
                        <img src={step.icon} alt={`${step.title} icon`} className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
