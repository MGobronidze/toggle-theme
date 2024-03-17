import { useEffect, useState } from 'react';

const breakpoints ={
    xs: "576",
    sm: "786",
    md:"992",
    lg:"1200"
}

const detectDevice = () => {
    const windowWidth = window.innerWidth;

    switch(true){
        case windowWidth <= parseInt(breakpoints.xs):
            return "Mobile";
        case windowWidth <= parseInt(breakpoints.sm):
            return "Tablet";
        case windowWidth <= parseInt(breakpoints.md):
            return "Leptop";
        case windowWidth <= parseInt(breakpoints.lg):
            return "Desktop"; 
        default:
            return "Large screen";
    }
}
const useDetectDevice = () => {
    const [device, setDevice] = useState(() => detectDevice());

    useEffect(()=>{
        const handleResize = () =>{
            setDevice(detectDevice())
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    })
  return device
}

export {useDetectDevice}