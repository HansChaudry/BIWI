import React, { useState, useEffect } from "react";
import axios from "axios";
import './Account.css';

const AccountPage = (props) => {
    const [userInfo, setInfo] = useState('');

    useEffect(() => {
        axios({
            url: `/data/users/byID/${props.user_ID}`,
            method: 'GET', 
        })
            .then((data) => {
                setInfo(data);
            })
            .catch(() => {
                console.log('Internal server error');
            });
    }, []);

    return(
        <div>
            {JSON.stringify(userInfo)}
            <br />
            <br />
            <button className="signOut-btn" onClick={props.func}>Sign out</button>
        </div>
    );
}

export default AccountPage;