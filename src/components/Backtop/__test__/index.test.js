import React from 'react';
import "@testing-library/jest-dom";
import {render} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import App from "../../../App";
import Backtop from "../index"


test("renders without crashing Backtop", () => {
    const {getByTestId} = render(
        <Provider store={store}>
            <App>
                <Backtop/>
            </App>
        </Provider>
    );
});