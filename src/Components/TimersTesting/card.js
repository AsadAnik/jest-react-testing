import React, { useEffect } from "react";

// Card function..
const Card = (props) => {

    // React Hook..
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            props.onSelect(null);
        }, 5000);

        return () => {
            clearTimeout(timeoutID);
        };

    }, [props.onSelect]);


    // Returning statement..
    return [1, 2, 3, 4, 5].map(choice => (
        <button
            key={choice}
            data-testid={choice}
            onClick={() => props.onSelect(choice)}
        >
            {choice}
        </button>
    ));
}

export default Card;