import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
    const [id, setId] = useState(1);
    const [title, setTitle] = useState("Go to work");
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({}); // {id: 1, title: "Go to work"
    <input
        className="form-control"
        value={id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
    />;
    const API_BASE = process.env.REACT_APP_API_BASE;
    const TODOS_API = `${API_BASE}/a5/todos`;

    const fetchTodosPromise = () => {
        const promise = axios.get(TODOS_API);
        promise.then((response) => {
            setTodos(response.data);
        });
    };

    const createTodo = async () => {
        const response = await axios.get(`${TODOS_API}/create`);
        setTodos(response.data);
    };

    const postTodo = async () => {
        const response = await axios.post(`${TODOS_API}`, {
            title: title,
        });
        setTodos(response.data);
    };

    const fetchTodos = async () => {
        const response = await axios.get(`${TODOS_API}`);
        setTodos(response.data);
    };

    const removeTodo = async (id) => {
        const response = await axios.get(`${TODOS_API}/${id}/delete`);
        setTodos(response.data);
    };

    const deleteTodo = async (id) => {
        const response = await axios.delete(`${TODOS_API}/${id}`);
        setTodos(response.data);
    };

    const updateTitle = async (id, title) => {
        const response = await axios.get(`${TODOS_API}/${id}/title/${title}`);
        setTodos(response.data);
    };

    useEffect(() => {
        // fetchTodosPromise();
        fetchTodos();
    }, []);

    return (
        <div>
            <h1>Working with Arrays</h1>
            <h2>Todos from server</h2>
            <button
                className="btn btn-primary"
                onClick={() => updateTitle(id, title)}
            >
                Update Todo Title
            </button>
            <button className="btn btn-primary" onClick={createTodo}>
                Create Todo
            </button>
            <button className="btn btn-primary" onClick={postTodo}>
                Post Todo
            </button>
            <input
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        <button
                            onClick={() => removeTodo(todo)}
                            className="btn btn-danger float-end" >
                            Remove
                        </button>
                        <button
                            className="btn btn-danger float-end"
                            onClick={() => deleteTodo(todo.id)}
                        >
                            Delete
                        </button>
                        {todo.title}
                        <hr />
                        {todo.id}
                    </li>
                ))}
            </ul>
            <h2>Update item title</h2>
            <input
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <a
                href={`${TODOS_API}/${id}/title/${title}`}
                className="btn btn-primary"
            >
                Update Todo Title
            </a>
            <h2>Fetch item by id</h2>

            <input
                className="form-control"
                value={id}
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />

            <input
                className="form-control"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <a
                href={`${TODOS_API}/${id}`}
                className="btn btn-primary"
            >
                Fetch Todo {id}
            </a>
            <h2>Fetch Array</h2>
            <a href={`${TODOS_API}`} className="btn btn-primary">
                Fetch Todos
            </a>
        </div >
    );
}

export default WorkingWithArrays;
