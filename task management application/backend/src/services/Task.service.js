const httpStatus = require("http-status");
const { UserModel,TaskModel } = require("../models")
const { ApiError } = require("../utils/ApiError");
const JWTService = require("../utils/jwt");

class TaskService{
        static async addTask(body,user){
                const {title,desc} = body
                TaskModel.create({
                    user,
                    title,
                    description:desc
                })
                return {
                    msg:"Task Added"
                }
        }

        static async getAllTask(user){
            const tasks = await TaskModel.find({user});

            return {
                tasks,
                total:tasks.length
            }
        }

        static async deleteById(user,id){
            const tasks = await TaskModel.findOneAndDelete({user,_id:id});
                if(!tasks){
                    throw new ApiError(httpStatus.BAD_REQUEST,"Task Not Found")
                }

                return {
                    msg:"Task Deleted"
                }
          
        }

         static async editTaskById(user,id){
            const tasks = await TaskModel.findOneAndUpdate({user,_id:id},{
                isComplete:true
            });
                if(!tasks){
                    throw new ApiError(httpStatus.BAD_REQUEST,"Task Not Found")
                }

                return {
                    msg:"Task Updated!! "
                }
            }

        
}

module.exports = TaskService