const express = require("express")
const router = express.Router()

const routes = [
    {
        path:'/auth',
        route:require("./Auth.route")
    },
    {
        path:'/task',
        route:require("./Task.route")
    }
]


routes.forEach((C)=>{
    router.use(C.path,C.route)
})

module.exports = router