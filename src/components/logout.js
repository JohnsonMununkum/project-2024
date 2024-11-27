import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//useNavigate is used to navigate to a page depending on the condition 
//here if user clicks logout they are logged out and return to the login page

const Logout = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear authentication state
        setIsAuthenticated(false);

    navigate("/login");
}, [setIsAuthenticated, navigate]);

    return (
        <div >
          <h1>Logging out...</h1>
        </div>
    );

};

export default Logout;
