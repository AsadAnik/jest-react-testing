import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Hello from './hello';

let container = null;

// Setup DOM element as a render target..
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

// Cleanup existing..
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


// let's some test..
// test with name and without name..
it('render with name or without name', function () {
    // without name and age..
    act(() => {
        render(<Hello />, container);
    });
    expect(container.textContent).toBe('Hey, Stranger!');

    // with name..
    act(() => {
        render(<Hello name={'Asad Anik'} />, container);
    });
    expect(container.textContent).toBe('Hey, Asad Anik!');
});


// test with age and without age..
it('render with age or without age', function () {
    // with age..
    act(() => {
        render(<Hello age={22} />, container);
    });
    expect(container.textContent).toBe('Hey, you are 22!');

    // without name and age..
    act(() => {
        render(<Hello />, container);
    });
    expect(container.textContent).toBe('Hey, Stranger!');
});


// test with name, age and without name, age..
it('render with name, age or without name, age', function () {
    // without name and age..
    act(() => {
        render(<Hello />, container);
    });
    expect(container.textContent).toBe('Hey, Stranger!');

    // with name and age..
    act(() => {
        render(<Hello name={'Xerox A'} age={22} />, container);
    });
    expect(container.textContent).toBe('Hey, Xerox A and you are 22!');
});