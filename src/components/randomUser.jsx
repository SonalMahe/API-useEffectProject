import { useEffect, useState } from "react";


function RandomUser() {
    const [user, setUser] = useState(null);
    const getData = async () => {
        try {
            const result = await fetch("https://randomuser.me/api/");
            const apiData = await result.json();
            setUser(apiData.results[0]);
        }
        catch (error) {
            console.log("error in fetching user info", error);
        }
    }
    const GetUserInfo = () => {
        getData();
    }
    useEffect(() => {
        if (user) {
            document.title = `Welcome ${user.name.first} ${user.name.last}`
        }
    },[user]);
    return (
        <div>

            <h1> User information</h1>
            <button onClick={GetUserInfo}> Get User</button>

            {/* Display User */}
            {user && (
                <div style={{ marginTop: "20px" }}>
                    <h3> User name: {user.name.first} {user.name.last}</h3>
                    <h3>Email:  {user.email} </h3>
                    <h2>Country: {user.location.country}</h2>
                    Image: <img src={user.picture.large} alt={user.name.first} />
                  
                    <p></p>
                </div>
            )}


        </div>
    );
};


export default RandomUser;