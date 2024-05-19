import { createContext, useContext, useState } from "react";

const StateContent: any = createContext({
    currentUser: {},
    setCurrentUser: () => {},
    userToken: null,
    setUserToken: () => {},
});

export const ContextProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<any | null>({
        name: "Hazz",
        email: "user@gmail.com",
        Image: "https://i.pinimg.com/236x/d7/68/42/d76842da733b7e4a2c679c0a6d0ba75e.jpg",
    });
    const [userToken, _setUserToken] = useState<any | null>(
        localStorage.getItem("TOKEN") || ""
    );

    const setUserToken = (token: any) => {
        if (token) localStorage.setItem("TOKEN", token);
        else localStorage.removeItem("TOKEN");
        _setUserToken(token);
    };
    return (
        <StateContent.Provider
            value={{ currentUser, setCurrentUser, userToken, setUserToken }}
        >
            {children}
        </StateContent.Provider>
    );
};

export const useStateContext = () => useContext(StateContent);
