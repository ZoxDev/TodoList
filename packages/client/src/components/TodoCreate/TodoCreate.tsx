// Css
import './TodoCreate.css';

// React
import { useState } from 'react';

export default function TodoCreate() {

    // State of the form
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    // Handle submit
    const handleSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, description: description })
        };

        if (title != '' || description != '') {
            fetch('http://localhost:5000/todos', requestOptions)
                .then((res) => {
                    if (res.status === 200) {
                        setTitle('');
                        setDescription('');
                    }
                })
                .catch((err) => console.log(err))
        }
    }

    return (
        <>
            <div className='todo_create_container'>
                <form className='todo_create_form' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className='todo_create_input'
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type='text'
                        className='todo_create_input'
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button className='todo_create_button' type='submit'>Add Todo</button>
                </form>
            </div>
        </>
    )
}
