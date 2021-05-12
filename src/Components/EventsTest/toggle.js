import React, { useState } from "react";

// Toggle Function..
const Toggle = (props) => {
    const [state, setState] = useState(false);

    // returning statement..
    return (
        <>
            <button
                onClick={() => {
                    setState( previousState => !previousState );
                    props.onChange(!state);
                }}
                data-testid="toggle"
            >
                { state === true ? "Turn Off" : "Turn On" }
            </button>
        </>
    );
}

export default Toggle;