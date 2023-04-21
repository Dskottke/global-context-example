import React, {createContext, useContext, useState} from 'react';

export const GlobalContext = createContext({});
export const useGlobalContext = () => useContext(GlobalContext);
function AppContext(props:any) {

    const [name,setName] = useState('peter')

    return (
        <GlobalContext.Provider value={{name,setName}}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default AppContext;