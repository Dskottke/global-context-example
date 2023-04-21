import React, {createContext, ReactNode, useContext, useState} from 'react';

export const GlobalContext = createContext({});
export const useGlobalContext = () => useContext(GlobalContext);

function AppContext(props: { children: ReactNode }) {
    const [name, setName] = useState('peter')

    return (
        <GlobalContext.Provider value={{name, setName}}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default AppContext;