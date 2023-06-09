import axios from 'axios';

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import {server} from "../server";

const ActivationPage = () => {
    const { activation_token } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post(`${server}/activation`, {
                        activation_token,
                    });
                    console.log(res.data.message)

                } catch (error) {
                    console.log(error.message.data.message);
                    setError(true);
                }
            };
            activationEmail();
        }
    }, [])
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"



        }} >
            {
                error ? (
                    <p>your token is expired !</p>
                ) : (
                    <p>Your account has been created successfully!</p>
                )
            }
        </div>

    )

}

export default ActivationPage