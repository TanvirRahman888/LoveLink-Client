import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import MemberCard from '../Common/MemberCard';
import { Helmet } from 'react-helmet-async';

const Biodata = () => {
  const { register, watch } = useForm();
  const [bioData, setBioData] = useState([]);
  const [filter, setFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    fetchBioData({});
  }, []);

  useEffect(() => {
    if (filter) {
      const filterBioData = {
        Gender: watch("Gender"),
        PremiumMember: watch("PremiumMember"),
        Religion: watch("Religion"),
        minAge: watch("minAge"),
        maxAge: watch("maxAge"),
        PermanentDivisionName: watch("Division"),
        sort: sortOrder
      };
      fetchBioData(filterBioData);
    }
  }, [watch(), filter, sortOrder]);

  const fetchBioData = async (filters) => {
    const queryParams = new URLSearchParams(filters);
    const response = await fetch(`https://love-link-server-eta.vercel.app/biodata?${queryParams}`);
    const data = await response.json();
    setBioData(data);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setFilter(true);
  };

  return (
    <div className='flex flex-col md:flex-row md:gap-3 p-5 border rounded-xl'>
      <Helmet>
                <title>LoveLink | Biodata</title>
            </Helmet>
      {/* Biodata page filter */}
      <div className='md:w-1/4 border rounded-xl'>
        <div>
          <h3 className='text-xl font-bold text-center p-3'>Filter Option</h3>
        </div>
        <div>
          <Tabs>
            <TabList className={'flex justify-around font-bold text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-pink-800 rounded-lg mx-2'}>
              <Tab className={'w-full border-2 px-2 py-1'} onClick={() => setFilter(true)}><p>Basic Filter</p></Tab>
              <Tab className={'w-full border-2 px-2 py-1'} onClick={() => setFilter(true)}><p>Advance Filter</p></Tab>
            </TabList>

            <TabPanel className='m-3'>
              <form className="max-w-sm mx-auto">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <select {...register("Gender")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                    <option value="">Select...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Premium Members?</label>
                  <select {...register("PremiumMember")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                    <option value="">Select...</option>
                    <option value="Yes">Only Premium Members</option>
                    <option value="No">All Members</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Religion</label>
                  <select {...register("Religion")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                    <option value="">Select...</option>
                    <option value="Islam">Islam</option>
                    <option value="Buddhism">Buddhism</option>
                    <option value="Catholicism">Catholicism</option>
                    <option value="Judaism">Judaism</option>
                  </select>
                </div>
              </form>
            </TabPanel>

            <TabPanel className='m-3'>
              <form className="max-w-sm mx-auto">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <select {...register("Gender")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                    <option value="">Select...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Only Premium Members?</label>
                  <select {...register("PremiumMember")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                    <option value="">Select...</option>
                    <option value="Yes">Premium Members</option>
                    <option value="No">General Members</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Religion</label>
                  <select {...register("Religion")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                    <option value="">Select...</option>
                    <option value="Islam">Islam</option>
                    <option value="Buddhism">Buddhism</option>
                    <option value="Catholicism">Catholicism</option>
                    <option value="Judaism">Judaism</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Min Age</label>
                  <input type='number' {...register("minAge")} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='Min Age' />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Max Age</label>
                  <input type='number' {...register("maxAge")} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='Max Age' />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Division</label>
                  <select {...register("Division")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                    <option value="">Select...</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattagram">Chattagram</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Maymansign">Maymansign</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Rangpur">Rangpur</option>
                  </select>
                </div>
              </form>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {/* Biodatas */}
      <div className='md:w-3/4 border rounded-xl'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl text-center font-bold md:w-1/3'>Total {bioData.length} Biodata</p>
          <div className="flex items-center font-bold gap-3">
            <label className="block text-sm font-medium text-gray-700 text-nowrap">Sort By Age</label>
            <select value={sortOrder} onChange={handleSortChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              <option value="">Select...</option>
              <option value="HighToLow">High to Low</option>
              <option value="LowToHigh">Low To High</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {bioData.length > 0 ? (
            bioData.map(member => <MemberCard key={member.BioID} member={member}></MemberCard>)
          ) : (
            <p className="text-center text-gray-500">No biodata available with current filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Biodata;
