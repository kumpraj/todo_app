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
                        <td>{todo.isImportant}</td>
                        <td>update</td>
                        <td><button className='hover:text-red-400' onClick={() => handleDelete(todo._id)}>delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TodoList;