import Todo from "../models/todoSchema";


export const getTodos = async (req,res) => {

    try {
        // fetch all the todos (asynchronous)
        const todos = await Todo.find({});

        res.status(200).json({
            success: true,
            message: "fetched all todos successfully",
            todos
        })

    } catch (error) {

        console.log("Error while fetchin todos");
        console.log("Error: ",error);
        
        res.status(400).json({
            success: false,
            message: "Error in getTodos controller",
        })
    }

}