import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../axios";

const StateContent: any = createContext({
    currentUser: {},
    setCurrentUser: () => {},
    userToken: null,
    setUserToken: () => {},
});

export const ContextProvider = ({ children }: any) => {
    // const [currentUser, setCurrentUser] = useState<any | null>({});
    const [userToken, _setUserToken] = useState<any | null>(
        localStorage.getItem("TOKEN") || ""
    );
    const [currentUser, setCurrentUser] = useState<any | null>(
        JSON.parse(localStorage.getItem("CURRENT_USER") || "{}")
    );

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                await axiosClient
                    .post(`/user/${currentUser.id}`)
                    .then((response) => {
                        setCurrentUser(response.data.user);
                        localStorage.setItem(
                            "CURRENT_USER",
                            JSON.stringify(response.data.user)
                        );
                    });
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        };

        if (userToken) {
            fetchCurrentUser();
        }
    }, [userToken]);

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
