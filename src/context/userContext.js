import { createContext, useState, FC } from "react";

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");

const UserContextInitials = {
    user: {},
    tokens: {
        accessToken,
        refreshToken,
    },
};

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(UserContextInitials);

    function setTokens(accessToken, refreshToken) {
        setUserData({ ...userData, tokens: { accessToken, refreshToken } });
    }

    return (
        <UserContext.Provider value={{ userData, setTokens }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
