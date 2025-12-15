import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./logout";

import "../App.css";


function RandomUser() {
    const [user, setUser] = useState();
    const getData = async () => {
        try {
            const results = await fetch("https://randomuser.me/api/");
            const apiData = await results.json();
            setUser(apiData.results[0]);
        }
        catch (error) {
            console.log("error in fetching user info", error);
        }
    }
    // const GetUserInfo = () => {
    //     getData();
    // }

    useEffect(() => {
        if (user) { document.title = `Welcome ${user.name.first} ${user.name.last}` }
    }, [user]);

    return (
        <div>
            <h1> User information</h1>
            <button className="btn" onClick={getData}> Get User</button>

            {/* Display User */}
            {user && (
                <div className="adjust">
                    <h3> User name: {user.name.first} {user.name.last}</h3>
                    <h3>Email:{user.email} </h3>
                    <h2>Country:{user.location.country}</h2>
                    Image:<img src={user.picture.large} alt="image" />

                </div>
            )}
            <Logout />

        </div>
        
    );
};

export default RandomUser;