import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SignleUser() {
    const [singleUser, setSingleUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function getData() {
            try {
                const resp = await axios.get(`https://reqres.in/api/users/${id}`);
                setSingleUser(resp.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [id]);

    if (!singleUser.id) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>Single User Details</h1>
            <div>
                <img src={singleUser.avatar} alt="" style={{width:"30%"}} />
                <h4>{singleUser.first_name}</h4>
                <p>{singleUser.email}</p>
            </div>
        </>
    );
}

export default SignleUser;
