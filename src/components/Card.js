import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardText from './CardText';
import Loading from './Loading';
import Wrapper from './Wrapper';
import Notfound from './Notfound';

const Card = () => {
    const [loading, setloading] = useState(true);
    const [error, setError] = useState({
        reason: "",
        message: ""
    });
    const [employeeData, setData] = useState(null);
    const navigate = useNavigate();


    function getUrlData() {
        navigate("/");
    }

    const param = useParams();
    useEffect(() => {
        setloading(true);
        axios.get(`https://api.matgargano.com/employees/${param.id}`).then(response => {
            setData(response.data);
            setloading(false);
        }).catch(err => {
            setError({
                reason: "Internel Server error",
                message: "Something went wrong . Please try again"
            });
            setloading(false);
            console.log(err);
        })
    }, [param.id]);

    if (loading) {
        return (
            <Wrapper>
                <Loading />
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            {
                employeeData ?
                    <div className='cardWrapper'>
                        <div className='imageDiv'>
                            <img src={employeeData.photo} alt="" />
                        </div>
                        <div className='textDiv'>
                            <CardText category={"Employee ID"} value={employeeData.id} />
                            <CardText category={"Name"} value={employeeData.name} />
                            <CardText category={"Department"} value={employeeData.department} />
                            <CardText category={"Employee role"} value={employeeData.role} />
                            <CardText category={"Start Date"} value={employeeData.startDate} />
                        </div>
                    </div>
                    :
                    <Notfound err={error.reason} message={error.message} clicked={() => getUrlData()} />

            }
        </Wrapper>
    );
}

export default Card;