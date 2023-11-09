// Components

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
            {data.map((todo) => {
                return (
                    <div key={todo.id} className="todo">
                        <p>{todo.title}</p>
                        <p>{todo.description}</p>
                        <p>{todo.actualstate}</p>
                    </div>
                )
            })}
        </>
    )
}
