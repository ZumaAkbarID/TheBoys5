import { createContext, useContext, useState } from "react";

const StateContent: any = createContext({
    currentUser: {},
    setCurrentUser: () => {},
    userToken: null,
    setUserToken: () => {},
});

export const ContextProvider = (children: any) => {
    const [currentUser, setCurrentUser] = useState<any | null>({});
    const [userToken, setUserToken] = useState<any | null>(null);

    return (
        <StateContent.Provider
            value={{ currentUser, setCurrentUser, userToken, setUserToken }}
        >
            {children}
        </StateContent.Provider>
    );
};

export const userStateContext = () => useContext(StateContent);
