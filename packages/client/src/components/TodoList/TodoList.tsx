// Css
import "./TodoList.css"

// Components
import UpdateTodo from "../UpdateTodo/UpdateTodo";

// Utils
import { useState, useEffect } from "react"

export default function TodoList() {

    // Create an interface for the data
    interface dataInterface {
        id: number;
        title: string;
        description: string;
        actualstate: boolean;
    }

    // Collect the data from the API
    const [data, setData] = useState<dataInterface[]>([]);

    useEffect(() => {
        try {
            fetch('http://localhost:5000/todos')
                .then(response => response.json())
                .then(data => setData(data));
        } catch (error) {
            console.error(error);
        }
    }, [])

    return (
        <>
            <section className="todos_list">
                {data.map((todo) => {
                    return (
                        <div key={todo.id} className="todo_item">
                            <span className="todo_item_title">{todo.title}</span>
                            <span className="todo_item_description">{todo.description}</span>
                            <UpdateTodo id={todo.id} title={todo.title} description={todo.description} />
                            {/* Todo / Doing Component */}
                            {/* Todo Valid */}
                            {/* Todo Delete */}
                        </div>
                    )
                })}
            </section>
        </>
    )
}
