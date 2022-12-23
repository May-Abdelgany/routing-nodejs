//with ES5
/*
const getUser = (req, res, next) => {
    res.send("user page")
}
const addUser = (req, res, next) => {
    res.json(req.body)
}
module.exports = {
    getUser,
    addUser
}
*/

//ES6
export const getUser = (req, res, next) => {
    res.send("user page")
}
export const addUser = (req, res, next) => {
    let arr = ['mohamed', 'may', 'aya', 'mostafa', 'mahmoud'];
    let exist = arr.find((element) => {
        return element == req.body.name;
    })
    if (exist != null) {
        res.json({ "message": `user ${exist} exist` })
    }
    else {
        res.json({ "message": `user ${req.body.name} not exist` })
    }
}