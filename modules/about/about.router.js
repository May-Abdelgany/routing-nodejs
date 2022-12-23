//ES5
/*
const router = require('express').Router();
const about = require('./controller/about')
router.get('/about', about)
module.exports = router
*/

//ES6
import {Router} from 'express'
const router=Router();
import getAbout from './controller/about.js'
router.get('/about', getAbout)
export default router
