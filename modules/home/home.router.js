//routing using ES5
/*
const home = require('./controller/home');
const router = require('express').Router();

router.get('/', home)

module.exports = router

*/

//ES6

import { Router } from 'express'
import getHome from './controller/home.js'
const router = Router();

router.get('/', getHome)

export default router