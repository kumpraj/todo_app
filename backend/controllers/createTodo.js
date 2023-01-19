import Todo from "../models/todoSchema";


export const createTodo = async(req, res) => {

    try {
    
        // get data for todo
        const {title, tasks, isImportant} = req.body;

        // check for title & tasks
        if(!title || !tasks){
            return res.status(400).json({error: "Title and Tasks are required"})
        }

        // creating a todo and saving it to db
        const todo = await Todo.create({
            title,
            tasks,
            isImportant
        });

        // send a success response of a created todo
        res.status(200).json({
            success: true,
            message: "todo created successfully",
            todo
        });

    } catch (error) {
        console.log("Error while creating todo");
        console.log("Error: ", error);

        res.status(500).json({
            success: false,
            message: "todo creation unsuccessfull",
            error
        });

    }

}