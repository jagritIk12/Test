const router = require('express').Router();
const controller = require("../controller/action")
const middleware = require("../middleware/mid")

// all routers url
router.get("/dash",controller.deshboard);
router.get("/login",middleware.token1,controller.login);
router.get("/logout",controller.logout);
router.get("/service",middleware.token2,controller.service)

// exporting a router instance
module.exports = router