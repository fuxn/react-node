import express from "express";
import React from "react";
import { match, RouterContext } from 'react-router'
var ReactDOMServer = require('react-dom/server');

const app = express();

import routes from "../shared/routes";

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/*', function (req, res) {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            let content = ReactDOMServer.renderToString(<RouterContext{...renderProps}/>);
            res.status(200).render('index',{content:content});
        } else {
            res.status(404).send('Not found')
        }
    })
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
