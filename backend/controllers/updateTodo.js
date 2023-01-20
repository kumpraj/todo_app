import Todo from "../models/todoSchema";

export const updateTodo = async (req,res) => {

    try {
        //  fetch id to update the todo
        const { todoId } = req.params;

        if(!todoId) {
            throw new Error("todoId not found to update");
        }

        // fetch all data to be updated
        const {title, tasks, isImportant} = req.body;

        // check if title and tasks exist
        if(!title && !tasks){
            throw new Error("title and tasks are required");
        }

        // finding by Id and updating the new values and returning the updated record
        const todo = await Todo.findByIdAndUpdate(todoId,{
            title,
            tasks,
            isImportant
        },{ new: true});

        if(!todo){
            throw new Error("todo update unsuccessfull");
        }

        res.status(200).json({
            success: true,
            message: "todo update successfull",
            todo
        })
    } catch (error) {
        console.log("Error: ", error);

        res.status(400).json({
            success: false,
            message: "todo update unsuccessfull",
            error 
        })
    }


}