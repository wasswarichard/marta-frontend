import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./store/store";
import Board from "./components/Board/Board"

const  App = () => (
    <Provider store={store}>
        <Router>
            <Route path="/" exact component={Board} />
        </Router>
    </Provider>
);
export default App;

