import React from "react";
import { Router} from 'react-router'
import ReactRom from 'react-dom'

import App from "../shared/components/AppHandler"
import routes from "../shared/routes";


ReactRom.render(
    <Router>{routes}</Router>, document.getElementById('app'));