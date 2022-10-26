import { useState } from "react";

const Counter = () => {

    console.log('Counter has rendered');
    
    // intialize state to track the amount of likes
    const [ likesCount, setLikesCount ] = useState(0);

    // define an event handler which will update state (when called)
    const handleClick = () => {
        // when this function is called, we need to update state by 1
        setLikesCount(likesCount + 1);
    }

    return (
        <section>
            <p>This page has been liked { likesCount } times</p>
            <button onClick={ handleClick }>Like!</button>
        </section>
    )
}

export default Counter;