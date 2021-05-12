import React from "react";
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Toggle from './toggle';

let container = null;

// setup a DOM element as a render target
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

// cleanup on exiting
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


//make some test..
it('change value when clicked', function () {
    let onChange = jest.fn();

    act(() => {
        render(<Toggle onChange={ onChange } />, container);
    });

    // get ahold of the button element, and trigger some clicks on it
    const button = document.querySelector("[data-testid=toggle]");
    expect(button.innerHTML).toBe("Turn On");

    //checking click event..
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe("Turn Off");

    //Testing button after many times clicking..
    act(() => {
        for (let i = 0; i < 5; i++){
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
    });

    expect(onChange).toHaveBeenCalledTimes(6);
    expect(button.innerHTML).toBe("Turn On");
});