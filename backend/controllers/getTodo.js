import Todo from '../models/todoSchema';

export const getTodo = async (req,res) => {

    try {
        
        //  fetch the particular todo by Id
        const {todoId} = req.params

        if (!todoId) {
            return res.json(400).json({
                success: false,
                message: "TodoId not found",
            })
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
        console.log("Error finding todoId");
        console.log("Error: ",error);
        
        res.status(400).json({
            success: false,
            message: "Error in getTodo controller",
        })
    }
}