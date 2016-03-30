import { Route } from "react-router";
import React from "react";

import AppHandler from "./components/AppHandler";
import Test from "./components/Test";

export default (
    <Route component={ AppHandler } path="/">
        <Route component={Test} path="show"/>
    </Route>
);
