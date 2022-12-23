//import with distracting ES5
/*
const { getUser, addUser } = require("./controller/user");
const router = require('express').Router();

router.get('/user', getUser)
router.post('/user', addUser)

module.exports = router;
*/

//import without distracting ES5
/*
const user = require("./controller/user");
const router = require('express').Router();

router.get('/user', user.getUser)
router.post('/user', user.addUser)

module.exports = router;
*/

//ES6
import * as user from './controller/user.js'
import { Router } from 'express'
const router = Router();

router.get('/user', user.getUser)
router.post('/user', user.addUser)

export default router;