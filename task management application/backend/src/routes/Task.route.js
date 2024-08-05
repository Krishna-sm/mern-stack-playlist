const express = require("express")
const router =express.Router()
const ValidationError = require("../middlwares/ValidationError")
const AuthValidator = require("../middlwares/AuthValidator")
const TaskValidation = require("../validations/Task.validation")
const TaskController = require("../controllers/Task.controller")

router.use(AuthValidator)

router.route("/add")
.post(TaskValidation.AddTask,ValidationError,TaskController.addTask)



router.route("/get-all")
.get(TaskController.getAllTask)




router.route("/delete/:id")
.delete(TaskValidation.paramsId,ValidationError,TaskController.deleteById)




router.route("/edit/:id")
.put(TaskValidation.paramsId,ValidationError,TaskController.editTaskById)
module.exports = router