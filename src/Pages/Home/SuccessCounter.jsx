import { useEffect, useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const SuccessCounter = () => {
  const [totalBiodata, setTotalBiodata] = useState(0);
  const [girlsBiodata, setGirlsBiodata] = useState(0);
  const [boysBiodata, setBoysBiodata] = useState(0);
  const [successStories, setSuccessStories] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
        const biodataResponse = await fetch('https://love-link-server-eta.vercel.app/allbiodata');
        const biodata = await biodataResponse.json();
        setTotalBiodata(biodata.length);

        const girlsResponse = await fetch('https://love-link-server-eta.vercel.app/femalebiodata');
        const girls = await girlsResponse.json();
        setGirlsBiodata(girls.length);

        const boysResponse = await fetch('https://love-link-server-eta.vercel.app/malebiodata');
        const boys = await boysResponse.json();
        setBoysBiodata(boys.length);

        const successResponse = await fetch('https://love-link-server-eta.vercel.app/successstory');
        const success = await successResponse.json();
        setSuccessStories(success.length);
    };

    fetchData();
  }, []);

  return (
    <div className="text-center py-10 my-10 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 rounded-lg shadow-lg mt-10">
        <SectionTitle title={"Check the Success"} sortDescription={"Success Counter"}></SectionTitle>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Success Counter</h2>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-gray-700 mb-2">{totalBiodata}</h3>
          <p className="text-gray-600">Total Biodata</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-gray-700 mb-2">{girlsBiodata}</h3>
          <p className="text-gray-600">Girls Biodata</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-gray-700 mb-2">{boysBiodata}</h3>
          <p className="text-gray-600">Boys Biodata</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-gray-700 mb-2">{successStories}</h3>
          <p className="text-gray-600">Marriages Completed</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;