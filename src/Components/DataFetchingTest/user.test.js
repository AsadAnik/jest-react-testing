import React from "react";
import { render, unmountComponentAtNode } from 'react-dom';
import {act} from "react-dom/test-utils";

import User from './user';

let container = null;

// setup a DOM element as a render target..
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

// cleanup on exiting..
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

// test for rendering user data..
it('renders user data', async () => {
    const fakeUser = {
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        })
    );

    // Use the asynchronous version of act to apply resolved promises..
    await act(async () => {
        render(<User id={1} />, container);
    });

    expect(container.querySelector('summary').textContent).toBe(fakeUser.name);
    expect(container.querySelector('.username').textContent).toBe(fakeUser.username);
    expect(container.querySelector('.email').textContent).toBe(fakeUser.email);
    expect(container.querySelector('#phone').textContent).toBe(fakeUser.phone);
    expect(container.textContent).toContain(fakeUser.website);

    // remove the mock to ensure tests are completely isolated..
    global.fetch.mockRestore();
});