import React, { useState } from 'react'
import axios from 'axios';


function TodoForm() {
    
    const [title, setTitle] = useState("");
    const [task, setTask] = useState("");
    const [taskArray, setTaskArray] = useState([]);
    const [important, setImportant] = useState(false);

    

    // to manage state change of title input field
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    // to manage state change of task input field
    const handleChange = (event) => {
        setTask(event.target.value);
    }

    // to add task in the task array 
    // and once added clear the field
    const addTask = () => {
        setTaskArray([...taskArray,task]);
        setTask("");
        console.log("Task",task);
        console.log("TaskArray",taskArray);
    }

    // to check isImportant
    const handleCheck = (event) => {
        if(event.target.checked){
            setImportant(true);
        }
        
        console.log(event.target.checked);
    }

    // to submit the todo details & send to db
    const handleSubmit = async (event) => {
        event.preventDefault();

        const todo = {
            title: title,
            tasks: taskArray,
            isImportant: important
        };

        const res = await axios.post('http://localhost:4001/createTodo', todo);
        console.log(res);

        //empty the fields
        setTitle("");
        setTaskArray([]);
        setImportant(false);
        
    }

  return (
                <div className="w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 bg-slate-200 px-8 py-8 mx-8 my-auto rounded-lg">

                    <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">Add your Todo Here!!!</h2>
                    

                    <form onSubmit={handleSubmit} className="my-8 text-sm">
                        <div className="flex flex-col my-4">
                            <label htmlFor="title" className="text-gray-700 text-lg font-bold">Todo Title</label>
                            <input type="text" name="title" id="title" value={title} onChange={handleTitleChange} className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your todo title"/>
                        </div>

                        <div className="flex flex-col my-4">
                            <label htmlFor="task" className="text-gray-700 text-lg font-bold">Enter Task</label>
                            <input type="task" name="task" id="task" value={task} onChange={handleChange} className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your tasks"/>

                            <ul className='my-6 border-2 flex gap-4'>
                                <h2 className='text-lg font-bold'>Tasks</h2>
                                {taskArray && taskArray.map((t,index)=> (<li key={index} className='text-lg bg-green-400 rounded-lg'>{t}</li>))}
                            </ul>
                            
                            

                            <input type='button' onClick={addTask} className=" w-32 bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase" value='Add Task'/>
                        </div>
                        

                        <div className="flex items-center">
                            <input type="checkbox" name="isImportant" id="is_Important" className="mr-2 focus:ring-0 rounded" onChange={handleCheck}/>
                            <label htmlFor="isImportant" className="text-gray-700">Is Important</label>
                        </div>
                    
                        <div className="my-4 flex items-center justify-end space-x-4">
                            <button type='submit' className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Add Todo</button>
                        </div>
                    </form>
                </div>
  )
}

export default TodoForm;