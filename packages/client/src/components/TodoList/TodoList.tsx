// Css
import "./TodoList.css"

// Components
import UpdateTodo from "../UpdateTodo/UpdateTodo";
import TodoState from "../TodoState/TodoState";
import TodoValid from "../ValidTodo/ValidTodo";

// Utils
import { useState, useEffect } from "react"

export default function TodoList() {

    // Create an interface for the data
    interface dataInterface {
        id: number;
        title: string;
        description: string;
        actualstate: number;
    }

    // Collect the data from the API
    const [data, setData] = useState<dataInterface[]>([]);

    useEffect(() => {
        try {
            fetch('http://localhost:5000/todos')
                .then(response => response.json())
                .then(data => {
                    const sortedData = data.sort((a: dataInterface, b: dataInterface) => b.actualstate - a.actualstate);
                    setData(sortedData);
                });
        } catch (error) {
            console.error(error);
        }
    }, [data])

    return (
        <>
            <section className="todos_list">
                {data.map((todo) => {
                    return (
                        <div key={todo.id} className="todo_item">
                            <span className="todo_item_title">{todo.title}</span>
                            <span className="todo_item_description">{todo.description}</span>
                            <div className="todo_options">
                                <UpdateTodo id={todo.id} title={todo.title} description={todo.description} />
                                <TodoState id={todo.id} actualstate={todo.actualstate}/>
                                <TodoValid id={todo.id}/>
                                {/* Todo Delete */}
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}
