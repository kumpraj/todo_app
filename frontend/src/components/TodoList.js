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
        if(!title || !tasks){
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
    <div>
        <table>
            <thead>
                <tr>
                <th>Title</th>
                <th>Taks</th>
                <th>isImportant</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todoList && todoList.map((todo) => (
                    <tr>
                        <td>{todo.title}</td>
                        <td>{todo.tasks.toString()}</td>
                        <td>{(todo.isImportant === true ? 'Yes': 'No')}</td>
                        <td><button className='hover:text-green-400' onClick={() => handleUpdate(todo)}>update</button></td>
                        <td><button className='hover:text-red-400' onClick={() => handleDelete(todo._id)}>delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TodoList;