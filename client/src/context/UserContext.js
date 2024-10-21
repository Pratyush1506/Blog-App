import { createContext, useState } from "react";

// Create the UserContext
export const UserContext = createContext({});

// Define the UserContextProvider to manage and provide user data
export const UserContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({}); // Manage the userInfo state

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};
