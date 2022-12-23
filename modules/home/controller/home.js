//ES5
/*
const getHome = (req, res, next) => {
    res.send('home page')
}
module.exports = getHome
*/

//ES6
const getHome = (req, res, next) => {
    res.send('home page')
}
export default getHome