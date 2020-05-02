import { useState, useEffect } from 'react';


//this hook captures the height & width of the viewport

function getWindowDimension() {
    //when you console.log(window), you see that these are included
    const {innerWidth: width, innerHeight: height} = window; //deconstructing the window object
        return { width, height }; //and returning the values
}

export default function useViewport() {
    const [useDimensions, setWindowDimensions] = useState(getWindowDimension);

    useEffect(() => {
        function handleResize() {//we want the values to change as soon as they change
            setWindowDimensions(getWindowDimension());
        }    

        window.addEventListener('resize', handleResize); //anytime resize event happens, it'll call handleResize 
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return useDimensions;
}