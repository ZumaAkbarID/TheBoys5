import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../axios";

const StateContent: any = createContext({
    currentUser: {},
    setCurrentUser: () => {},
    userToken: null,
    setUserToken: () => {},
});

export const ContextProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<any | null>({});
    const [userToken, _setUserToken] = useState<any | null>(
        localStorage.getItem("TOKEN") || ""
    );

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                await axiosClient
                    .get(`/user/${currentUser.id}`)
                    .then((response) => {
                        setCurrentUser(response.data);
                    });
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        };

        if (currentUser.id && userToken) {
            fetchCurrentUser();
        }
    }, []);

    const setUserToken = (token: any) => {
        if (token) localStorage.setItem("TOKEN", token);
        else localStorage.removeItem("TOKEN");
        _setUserToken(token);
    };

    console.log(currentUser);
    console.log(userToken);
    return (
        <StateContent.Provider
            value={{ currentUser, setCurrentUser, userToken, setUserToken }}
        >
            {children}
        </StateContent.Provider>
    );
};

export const useStateContext = () => useContext(StateContent);
