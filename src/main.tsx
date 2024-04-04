import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import { Home } from './templates/Home'
import { Form } from './templates/Form';
import { Provider } from 'react-redux';
import './index.css'
import { store } from './redux/store';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/create",
        element: <Form />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
