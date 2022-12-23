//ES5
/*
const getAbout=(req, res, next) => {
    res.send("about page")
}

module.exports=getAbout
*/

//ES6
const getAbout = (req, res, next) => {
    res.send("about page")
}
export default getAbout