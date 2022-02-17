import { useEffect, useState } from "react"

export const useDebounce = (value:string) => {
  
    const [debounecValue, setDebounceValue] = useState(value);

    useEffect(() => {
      const timeDebounce = setTimeout(() => {
        setDebounceValue(value); 
      }, 1500);
      return() =>{
        clearTimeout(timeDebounce);
      }
    }, [value]);
  
    return debounecValue;
  
}