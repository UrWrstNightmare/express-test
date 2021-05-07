const pass = "qwer1234"

function auth(req, res, next) {
    if (req.query.password === pass) {
        next()
    }
    else res.send("Access Denied")
}

module.exports = auth