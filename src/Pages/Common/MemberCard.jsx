import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MemberCard = ({ member }) => {
    const { BiodataId, Name, BiodataType, ProfileImage, PermanentDivisionName, Age, Occupation, Religion } = member;
    return (
        <Card>
            <CardHeader floated={false} className="h-80">
                <img src={ProfileImage} alt="profile-picture" className="w-full" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {Name}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    <span className="font-bold">Age : </span> {Age}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    <span className="font-bold">Gender : </span> {BiodataType}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    <span className="font-bold">Occupation: </span> {Occupation}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    <span className="font-bold">Division : </span> {PermanentDivisionName}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    <span className="font-bold">Religion : </span> {Religion}
                </Typography>
                <Link to={`/member/${BiodataId}`}><button className="btn btn-outline btn-secondary">View Details</button></Link>
            </CardBody>
            {/* <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Like">
                    <Typography
                        as="a"
                        href="#facebook"
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <i className="fab fa-facebook" />
                    </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#twitter"
                        variant="lead"
                        color="light-blue"
                        textGradient
                    >
                        <i className="fab fa-twitter" />
                    </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#instagram"
                        variant="lead"
                        color="purple"
                        textGradient
                    >
                        <i className="fab fa-instagram" />
                    </Typography>
                </Tooltip>
            </CardFooter> */}
        </Card>
    );
};

export default MemberCard;