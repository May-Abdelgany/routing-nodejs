//create server http and routing

/*const http = require("http");
const server = http.createServer((req, res, next) => {
    if (req.method == 'GET' && req.url == '/') {
        res.write("home page");
        res.end()
    }
    else if (req.method == 'GET' && req.url == '/about') {
        res.write("about page");
        res.end()
    }
    else if (req.method == 'POST' && req.url == '/user') {
        let bufferData = '';
        req.on('data', (chunk) => {
            bufferData = chunk;
        })
        req.on('end', () => {
            let convert = JSON.parse(bufferData);
            res.write(JSON.stringify(convert))
            res.end();
        })
    }
    else {
        res.end("404 not find page")
    }
})
server.listen(3000, () => {
    console.log("Running server !.......")
})*/

//Express
/*
const express = require("express");
const app = express();
app.use(express.json())
app.get('/', (req, res, next) => {
    res.send("home page");
})
app.get('/about', (req, res, next) => {
    res.send("about page");
})
app.post('/user', (req, res, next) => {
    res.json(req.body)
})
app.get('*', (req, res, next) => {
    res.send("404 not find page");
})
app.listen(3000, () => {
    console.log("Running server !.......")
})
*/

//Divide with ES5
/*
const express = require("express");
const userRouter = require("./modules/user/user.router");
const homeRouter = require("./modules/home/home.router");
const aboutRouter = require("./modules/about/about.router")
const app = express();
app.use(express.json())
app.use(userRouter)
app.use(homeRouter)
app.use(aboutRouter)
app.get('*', (req, res, next) => {
    res.send("404 not found page")
})
app.listen(3000, () => {
    console.log("Running server !.......")
})
*/
//Divide using ES6

/*const express = require("express");
const userRouter = require("./modules/user/user.router");
const homeRouter = require("./modules/home/home.router");
const aboutRouter = require("./modules/about/about.router")*/
import express from "express";
import userRouter from "./modules/user/user.router.js";
import homeRouter from "./modules/home/home.router.js";
import aboutRouter from "./modules/about/about.router.js";
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(homeRouter);
app.use(aboutRouter);
app.get("*", (req, res, next) => {
  res.send("404 not found page");
});
app.listen(3000, () => {
  console.log("Running server !.......");
});
