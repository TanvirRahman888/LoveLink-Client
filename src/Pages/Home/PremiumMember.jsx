import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import MemberCard from "../Common/MemberCard";


const PremiumMember = () => {

    const [premiumMember, setPremiumMember] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setPremiumMember(data))
    }, [])
    return (
        <div>
            <SectionTitle title="Trusted Profiles" sortDescription="Premium Members"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center p-5 rounded-xl"
            style={{ background: 'linear-gradient(to right, #F2BABA, #E541AE)' }}
            >
                {
                    premiumMember.filter(member => member.Occupation === "Job" || member.Occupation === "Business").slice(0, 6)
                        .map(member => <MemberCard key={member.BiodataId} member={member}></MemberCard>)
                }
            </div>
        </div>
    );
};

export default PremiumMember;