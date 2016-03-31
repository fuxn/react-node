import React from "react";
import { Router,hashHistory} from 'react-router'
import ReactRom from 'react-dom'

import App from "../shared/components/AppHandler"
import Test from "../shared/components/Test"
import routes from "../shared/routes";


ReactRom.render(
    <Router history={hashHistory}>{routes}</Router>, document.getElementById('app'));