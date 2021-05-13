import React from "react";
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Card from './card';

let container = null;

// before component load..
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

// after components load..
afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


// make some testings...
// 1st test..
it('should select null after timing out', function () {
    const onSelect = jest.fn();

    act(() => {
        render(<Card onSelect={onSelect} />, container);
    });

    // and then move ahead time by 100ms..
    act(() => {
        jest.advanceTimersByTime(100);
    });
    expect(onSelect).not.toHaveBeenCalled();

    // and then move ahead time by 5sec..
    act(() => {
        jest.advanceTimersByTime(5000);
    });
    expect(onSelect).toHaveBeenCalledWith(null);
});


// 2nd test..
it('should cleanup and being removed', function () {
    const onSelect = jest.fn();

    act(() => {
        render(<Card onSelect={ onSelect } />, container);
    });

    // and then move ahead time by 100ms..
    act(() => {
        jest.advanceTimersByTime(100);
    });
    expect(onSelect).not.toHaveBeenCalled();

    // unmount the app..
    act(() => {
        render(null, container);
    });

    act(() => {
        jest.advanceTimersByTime(5000);
    });
    expect(onSelect).not.toHaveBeenCalled();

});


// 3rd test..
it('should accept selections', function () {
    const onSelect = jest.fn();

    act(() => {
        render(<Card onSelect={onSelect} />, container);
    });

    act(() => {
        container.querySelector("[data-testid='2']").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(onSelect).toHaveBeenCalledWith(2);
}); 