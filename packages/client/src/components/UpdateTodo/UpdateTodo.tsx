// CSS
import './UpdateTodo.css';

// Utils 
import styled from 'styled-components';
import { useState } from 'react';

// Modal
const UpdateModal = styled.div<{ modalState: boolean }>`
    display: ${props => props.modalState ? 'block' : 'none'};
    position: fixed;
    width: 500px;
    height: 500px;
    background-color: #ffffff;
    color: white;
    z-index: 2;
    top: calc(50% - 250px);
    left: calc(50% - 250px);
    border-radius: 10px;
    border: 5px solid black;
`;

interface UpdateTodoProps {
    id: number;
    title: string;
    description: string;
}

export default function UpdateTodo(props: UpdateTodoProps) {

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(props.title);
    const [description, setDescription] = useState<string>(props.description);

    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, description: description }),
    };

    const handleSubmit = () => {
        fetch('http://localhost:5000/todos/' + props.id, requestOptions)
            .then((res) => {
                if (res.status === 200) {
                    setOpenModal(!openModal)
                    console.log(res.status)
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <svg onClick={handleOpenModal} className='update_svg' width="513" height="456" viewBox="0 0 513 456" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M358.525 74.0025L438.85 154.328C442.234 157.712 442.234 163.233 438.85 166.617L244.36 361.107L161.719 370.28C150.677 371.526 141.326 362.176 142.573 351.133L151.745 268.493L346.235 74.0025C349.619 70.6185 355.141 70.6185 358.525 74.0025ZM502.789 53.6095L459.332 10.152C445.796 -3.38399 423.8 -3.38399 410.175 10.152L378.651 41.6765C375.267 45.0605 375.267 50.5817 378.651 53.9657L458.976 134.291C462.36 137.675 467.881 137.675 471.265 134.291L502.789 102.766C516.325 89.1414 516.325 67.1455 502.789 53.6095ZM341.961 308.21V398.865H56.9935V113.898H261.636C264.485 113.898 267.157 112.74 269.205 110.781L304.826 75.1602C311.594 68.3922 306.785 56.9044 297.257 56.9044H42.7451C19.1463 56.9044 0 76.0507 0 99.6496V413.114C0 436.713 19.1463 455.859 42.7451 455.859H356.209C379.808 455.859 398.954 436.713 398.954 413.114V272.589C398.954 263.061 387.467 258.341 380.699 265.02L345.078 300.641C343.119 302.689 341.961 305.36 341.961 308.21Z" fill="#000AFF" />
            </svg>

            <UpdateModal modalState={openModal}>
                <form onSubmit={handleSubmit} className='update_form'>
                    <label className='update_label' htmlFor="title">Title</label>
                    <input
                        className='update_input'
                        type="text"
                        name="title"
                        id="title"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label className='update_label' htmlFor="description">Description</label>
                    <input
                        className='update_input'
                        type="text"
                        name="description"
                        id="description"
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button className='update_button' type="submit">Update</button>
                </form>
            </UpdateModal>
        </>
    )
}