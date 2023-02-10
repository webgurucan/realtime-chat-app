import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./rotues";
import store from "./redux/store";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
