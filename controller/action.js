// dashboard 
function deshboard(req, res) {
    try {
        res.status(200).send({ Message: "its my dashboard" })
    }
    catch (err) {
        res.status(500).send({ Message: "error occured" + err.Message })
    }
}

//login
function login(req, res) {
    try {
        res.status(200).send({ Message: "login succesfully" })
    }
    catch (err) {
        res.status(500).send({ Message: "error occured" + err.Message })

    }
}
//logout
function logout(req, res) {
    try {
        res.status(200).send({ Message: "log out succesfully" })
    }
    catch (err) {

        res.status(500).send({ Message: "error occured" + err.Message })
    }
}

//services
function service(req, res) {
    res.status(200).send("applied services")
}

//export all funnction
module.exports = {
    deshboard,
    login,
    logout,
    service
}
