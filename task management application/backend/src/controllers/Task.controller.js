const httpStatus = require("http-status");
const TaskService = require("../services/Task.service");
const CatchAsync = require("../utils/CatchAsync");

class TaskController{

           
                    static addTask  = CatchAsync(async(req,res)=>{
                        const res_obj = await TaskService.addTask(req.body,req.user);
                        res.status(httpStatus.CREATED).send(res_obj)
                    })
            

                    static getAllTask =   CatchAsync(async(req,res)=>{
                        const res_obj = await TaskService.getAllTask(req.user);
                        res.status(httpStatus.OK).send(res_obj)
                    })
                      static deleteById =   CatchAsync(async(req,res)=>{
                        const res_obj = await TaskService.deleteById(req.user,req?.params?.id);
                        res.status(httpStatus.OK).send(res_obj)
                    })


                          static editTaskById =   CatchAsync(async(req,res)=>{
                        const res_obj = await TaskService.editTaskById(req.user,req?.params?.id);
                        res.status(httpStatus.OK).send(res_obj)
                    })
}

module.exports = TaskController