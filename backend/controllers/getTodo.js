const Todo = require("../models/todoSchema");


exports.getTodo = async (req,res) => {

    try {
        
        //  fetch the particular todo by Id
        const todoId = req.params.id

        if (!todoId) {
            throw new Error('No todoId found');
        }


        // find todo by Id (asynchronously)
        const todo = await Todo.findById(todoId);

        if(!todo){
            throw new Error("Todo not found");
        }

        res.status(200).json({
            success: true,
            message: "Todo found succcessfull",
            todo
        })

    } catch (error) {
        // console.log("Error finding todoId");
        // console.log("Error: ",error);
        
        res.status(400).json({
            success: false,
            message: "Error in getTodo controller",
            error
        })
    }
}