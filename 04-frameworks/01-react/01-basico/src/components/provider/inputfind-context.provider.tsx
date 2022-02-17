import React from "react";
import {userContext} from "../../model/model";


const initialContextValue:userContext = {
    inputFindValue: "",
    setInputFindValue: (value) => {},
}

  
export const InputFindContextGit = React.createContext(initialContextValue);
  
export const InputFindProviderGit: React.FC = ({children}) => {

    const [inputFindValue, setInputFindValue] = React.useState("lemoncode");
  
    return (
        <InputFindContextGit.Provider 
            value={{
                inputFindValue,
                setInputFindValue
            }}
        >
            {children}
        </InputFindContextGit.Provider>
    );
    
}

export const InputFindContextRyn = React.createContext(initialContextValue);

export const InputFindProviderRym: React.FC = ({children}) => {

    const [inputFindValue, setInputFindValue] = React.useState("Human");
  
    return (
        <InputFindContextRyn.Provider 
            value={{
                inputFindValue,
                setInputFindValue
            }}
        >
            {children}
        </InputFindContextRyn.Provider>
    );
    
}
