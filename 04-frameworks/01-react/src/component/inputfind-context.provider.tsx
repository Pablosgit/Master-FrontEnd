import React from "react";

interface userContext {
    inputFindValue: string,
    setInputFindValue: (value:string) => void,
}


const initialContextValue:userContext = {
    inputFindValue: "",
    setInputFindValue: (value) => {},
}

  
export const InputFindContext = React.createContext(initialContextValue)
  
export const InputFindProvider: React.FC = ({children}) => {

    const [inputFindValue, setInputFindValue] = React.useState("lemoncode");
  
    return (
        <InputFindContext.Provider 
            value={{
                inputFindValue,
                setInputFindValue
            }}
        >
            {children}
        </InputFindContext.Provider>
    );
}