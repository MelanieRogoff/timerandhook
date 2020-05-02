import React, { useState, useEffect } from 'react';
import useViewport from './hook/Viewport';

const Box = () => {

    const [count, setCount] = useState(0); //setting up the state for the counter
    const { width, height} = useViewport(); 
    const handleIncrement = () => setCount(count + 1); //incrementing timer
    const handleDecrement = () => setCount(count - 1); //decrementing timer
    const clearCount = () => setCount(0); //resetting timer

    useEffect(() => {
        document.title=count; //this sets the title of the document to whatever count is
    }, [count]); //adding count here as a dependency
    
    //If we don't have a dependency (in brackets) listed, this will run everytime the component re-renders. If we only want the effect to run under certain circumstances, we enter a dependency. This one, [count], means it only runs when count changes.
    
    //Dependencies can help us avoid infinite loops or too many re-renders.
    
    //When we have an empty dependency [], it'll only run useEffect once. ALWAYS HAVE AN ARRAY IN useEffect.


    return (
        <>
            <p>{count}</p> {/* {count}  is how we access the 0 from the useState */}
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={clearCount}>Reset Timer</button>
            <p>The current screen size is {width} by {height}</p>
            { //ternary operator
                count >= 0 //if count is more than or equal to 0
                    ? <p>Count is more than 0 </p> //render this p tag
                    : <p>Count is less than 0</p> //otherwise, do the opposite
            }

            {/* {
                count >= 0 && 
                //FOR WHEN WE DON'T NEED AN ELSE. &&=SHORT CIRCUIT. IT'S AN OPERATOR FOR 'AND'.  */
            //    <p>Count is more than 0</p>
             //THIS SAYS IF COUNT >=0 IS TRUE AND <p>count is more than 0</p> IS TRUE, THEN RUN. p tags and other tags are always true.
             }
        </>
    )
}

export default Box; 