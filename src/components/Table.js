import { React, useState, useEffect } from 'react';
import Wrapper from './Wrapper';
import Loading from './Loading';
import TableRow from './TableRow';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notfound from './Notfound';

const Table = () => {
    const [loading, setLoading] = useState(false);
    const [employeedata, setData] = useState([]);
    const [error, setError] = useState(false);
    const navigation = useNavigate();

    function handleClick(link) {
        navigation(`/employee-detail/${link}`);
    }

    function getUrlData() {
        navigation("/")
    }


    useEffect(() => {
        setLoading(true);
        axios.get("https://api.matgargano.com/employees").then((res) => {
            setData(res.data);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false)
            setError(true);
        })
    }, []);

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
                error ? <Notfound err={"Internal server error"} message={"Looks like you have slow internet connection"} clicked={() => getUrlData()} />
                    :
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employeedata?.map((data, index) => {
                                    return <TableRow employee={data} key={index} click={() => handleClick(data.id)} />
                                })
                            }
                        </tbody>
                    </table>
            }
        </Wrapper>
    );
}

export default Table;
