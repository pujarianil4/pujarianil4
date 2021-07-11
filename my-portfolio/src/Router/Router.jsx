import React from 'react';
import {Route } from "react-router-dom"
import Home from '../Pages/Home/Home';
const Router = () => {
    return (
        <>
        <Route path="/">
       <Home/>
        </Route>
        </>
    );
};

export default Router;