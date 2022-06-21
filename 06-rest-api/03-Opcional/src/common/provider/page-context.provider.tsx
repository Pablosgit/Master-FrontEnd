import React from "react";
import {pageContext} from "../models/providers";


const initialContextValue:pageContext = {
  numPageValue: 0,
  setNumPageValue: (value:number) => {},
}

export const PageNumContext = React.createContext(initialContextValue);

export const PageNumProvider: React.FC = ({children}) => {

    const [numPageValue, setNumPageValue] = React.useState(1);

    return (
        <PageNumContext.Provider
            value={{
              numPageValue,
              setNumPageValue
            }}
        >
            {children}
        </PageNumContext.Provider>
    );

}
