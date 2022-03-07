import React from "react";
  
const initialContextSelectedKitties = {
    imagesSelected: [],
    setSelectedPicture: (value) => {},
}

  
export const KittiesContext = React.createContext(initialContextSelectedKitties);
  
export const KittiesProvider: React.FC = ({children}) => {

    const [imagesSelected, setSelectedPicture] = React.useState([]);

    return (
        <KittiesContext.Provider 
            value={{
                imagesSelected,
                setSelectedPicture,
            }}
        >
            {children}
        </KittiesContext.Provider>
    );
    
}
