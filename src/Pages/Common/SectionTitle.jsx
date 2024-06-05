
const SectionTitle = ({title, sortDescription}) => {
    return (
        <div>
            <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-red-400 mb-2">--- {title} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{sortDescription}</h3>
        </div>
        </div>
    );
};

export default SectionTitle;