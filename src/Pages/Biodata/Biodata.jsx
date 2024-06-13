import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useForm } from "react-hook-form";




import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { useEffect, useState } from 'react';
import MemberCard from '../Common/MemberCard';

const Biodata = () => {
    
    const { register, handleSubmit } = useForm();

    const [bioData, setBioData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/biodata")
            .then(res => res.json())
            .then(data =>setBioData(data))
    }, [])


    const onSubmit = data => {
        console.log(data);


    };
    return (
        <div className='flex flex-col md:flex-row md:gap-3 p-5 border rounded-xl'>
            {/* Biodata page filter */}
            <div className='md:w-1/4 border rounded-xl'>
                <div>
                    <h3 className='text-xl font-bold text-center p-3'>Filter Option</h3>
                </div>
                <div>
                    <Tabs>
                        <TabList className={'flex justify-around font-bold text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg mx-2'}>
                            <Tab className={'w-full border-2 px-2 py-1'}><NavLink >Basic Filter</NavLink></Tab>
                            <Tab className={'w-full border-2 px-2 py-1'}><NavLink >Advance Filter</NavLink></Tab>
                        </TabList>

                        <TabPanel className='m-3'>
                            <form className="max-w-sm mx-auto" onChange={handleSubmit(onSubmit)}>
                                <Accordion allowMultipleExpanded={false} allowZeroExpanded={true}>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Gender
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div>

                                                <select {...register("Gender")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                                    <option value="" className="disabled">Select...</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Only Premium Members?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div>
                                                <select {...register("premiumMember")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                                    <option value="" className="disabled">Select...</option>
                                                    <option value="Yes">Only Premium Members</option>
                                                    <option value="No">All Members</option>
                                                </select>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Religion
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div>
                                                <select {...register("Religion")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                                    <option value="" className="disabled">Select...</option>
                                                    <option value="Islam">Islam</option>
                                                    <option value="Buddhism">Buddhism</option>
                                                    <option value="Catholicism">Catholicism</option>
                                                    <option value="Judaism">Judaism</option>
                                                </select>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>

                            </form>
                        </TabPanel>
                        <TabPanel className='m-3'>
                            <form className="max-w-sm mx-auto" onChange={handleSubmit(onSubmit)}>
                                <Accordion allowMultipleExpanded={false} allowZeroExpanded={true}>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Gender
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div>

                                                <select {...register("Gender")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                                    <option value="" className="disabled">Select...</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Only Premium Members?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div>
                                                <select {...register("premiumMember")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                                    <option value="" className="disabled">Select...</option>
                                                    <option value="Yes">Only Premium Members</option>
                                                    <option value="No">All Members</option>
                                                </select>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Religion
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div>
                                                <select {...register("Religion")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                                    <option value="" className="disabled">Select...</option>
                                                    <option value="Islam">Islam</option>
                                                    <option value="Buddhism">Buddhism</option>
                                                    <option value="Catholicism">Catholicism</option>
                                                    <option value="Judaism">Judaism</option>
                                                </select>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Age
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className='flex'>
                                                <input type='number' defaultValue={'18'} {...register("minAge")} className='w-1/2' placeholder='Min Age' />
                                                <input type='number' defaultValue={'58'} {...register("maxAge")} className='w-1/2' placeholder='Max Age' />
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Division
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div>
                                                <select {...register("Division")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                                    <option value="" className="disabled">Select...</option>
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
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </form>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            {/* Biodatas */}
            <div className='md:w-3/4 border rounded-xl'>
                <div className='flex flex-col md:flex-row p-3 justify-around gap-3 items-center'>
                    <input type="number" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white md:w-1/3' name="" id="" placeholder='Search By Biodata ID' />
                    <p className='text-2xl font-bold md:w-1/3'>Total {bioData.length} Biodata</p>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white md:w-1/3">
                        <option value="" className="disabled">Sort By</option>
                        <option value="Chattagram">New Biodata</option>
                        <option value="Rajshahi">Sort By Age</option>
                    </select>
                </div>
                <hr />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        bioData.map(member => <MemberCard key={member.BioID} member={member}></MemberCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Biodata;