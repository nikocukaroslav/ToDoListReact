import React from "react";
import ReactDOM from "react-dom/client";
import App from "./features/App";
import "./styles/Index.module.css";

import store from "./store"
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
);
