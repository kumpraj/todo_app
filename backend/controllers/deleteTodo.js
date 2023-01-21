const Todo = require("../models/todoSchema");


exports.deleteTodo = async (req,res) => {
    
    try {
        // fetch Id from params
        const todoId = req.params.id;
        
        if(!todoId){
            return res.status(400).json({
                success: false,
                message: "todoId not found to be deleted"
            })
        }

        // delete todo by Id (asynchronously)
        const todo = await Todo.findByIdAndDelete(todoId);

        if(!todo){
            throw new Error("No todo found to be deleted");
        }

        res.status(200).json({
            success: true,
            message: "todo deleted successfully",
            todo
        })

    } catch (error) {
        
        console.log("Error deleting todo");
        console.log("Error: ", error);

        res.status(400).json({
            success: true,
            message: "Delete todo unsuccessfull",
            error
        })

    }
}