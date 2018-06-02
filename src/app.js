import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetAccommodations } from "./actions/accommodations";

import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(startSetAccommodations());
    const jsx = (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
// })
// .catch((err) => console.log("Application not loading.....", err));

