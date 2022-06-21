import React from "react";
import {userContext} from "../models/providers";


const initialContextValue:userContext = {
    inputFindValue: "",
    setInputFindValue: (value) => {},
}

export const InputFindContext = React.createContext(initialContextValue);

export const InputFindProvider: React.FC = ({children}) => {

    const [inputFindValue, setInputFindValue] = React.useState("");

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
