import { useState, useEffect } from "react";

//WindowDimension interface
export interface WindowDimension {
    height: number;
    width: number;
}


export const useWindowDimensions = (): WindowDimension => {
    //set initial state to 0,0
    const [dimension, setDimension] = useState<WindowDimension>({
        height: 0,
        width: 0,
    });
    //set dimensions
    const handleResize = () => {
        setDimension({
            height: window.innerHeight,
            width: window.innerWidth,
        });
    };

    //get dimensions from window
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        //remove listener- prevents mem leaks, redundant event calls
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return dimension;
};
