import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TodoList() {
    const [todoList, setTodoList] = useState(null);

    // to fetch all todos from the db
    const fetchTodoList = async () => {
        const resp = await axios.get('http://localhost:4001/getTodos');
        console.log(resp);

        if(resp.data.todos.length > 0){
            setTodoList(resp.data.todos);
        }
    }

    // to deleteTodo from the todoList
    const handleDelete = async (id) => {
        const resp = await axios.delete(`http://localhost:4001/deleteTodo/${id}`);

        console.log(resp);

    }

    // to update todo from todoList
    const handleUpdate = async (todo) => {

        const title = prompt("Enter your updated title");
        const tasks = prompt("Enter the tasks comma separated").split(',');
        const important = prompt('Enter true or false','false').toLowerCase();
        const isImportant = false;

        if(important === 'true'){
            isImportant = true;
        }

        // check for title & tasks
        if(!title || !(tasks.length === 0)){
            alert('Both Title and tasks are mandatory fields');
        }else {
            const resp = await axios.put(`http://localhost:4001/updateTodo/${todo._id}`,{
                title,
                tasks,
                isImportant
            })

            console.log(resp);
        }
    }

    // to fetch the updated todos if change in any todoList
    useEffect(() => {
        fetchTodoList();
    },[todoList]);


  return (
    <div className="w-5/6 md:w-3/4 lg:w-2/3 xl:w-[600px] 2xl:w-[600px] mt-2 bg-slate-400 px-8 py-8 mx-8 my-auto rounded-lg">
        <div className="text-white flex items-center justify-center ">
	        <div className="col-span-12">
		        <div className="overflow-auto lg:overflow-visible ">
                    <table className='table border-separate space-y-6 text-sm'>
                        <thead className='bg-slate-600 text-purple-300 border-2 borger-green-300'>
                            <tr>
                            <th className='px-3 py-1'>Title</th>
                            <th className='px-3 py-1'>Taks</th>
                            <th className='px-3 py-1'>isImportant</th>
                            <th className='px-3 py-1'>Update</th>
                            <th className='px-3 py-1'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoList && todoList.map((todo) => (
                                <tr>
                                    <td className='px-3 py-2'>{todo.title}</td>
                                    <td className='px-3 py-2'>{todo.tasks.toString()}</td>
                                    <td className='px-3 py-2'>{(todo.isImportant === true ? 'Yes': 'No')}</td>
                                    <td className='px-3 py-2'><button className='hover:text-green-400' onClick={() => handleUpdate(todo)}>update</button></td>
                                    <td className='px-3 py-2'><button className='hover:text-red-400' onClick={() => handleDelete(todo._id)}>delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoList;