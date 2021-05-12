import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import logo from './logo.svg';
import App from './App';

let container = null;

// Created element and put into body DOM before Render..
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});


// After render element checkout from these and cleanup..
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


// make testing unit..
it('testing App image logo', function () {
    act(() => {
        render(<App />, container);
    });

    expect(container.querySelector('.App-logo').src).toContain(logo);
});

// make test on Button...
it('testing App button', function () {
    act(() => {
       render(<App />, container);
    });

    expect(container.querySelector('.App-link').innerHTML).toBe('Learn React');
    expect(container.querySelector('.App-link').href).toBe('https://reactjs.org/');
});