// Css
import './ValidTodo.css'

interface TodoStateInterface {
    id: number;
}

export default function TodoValid(props: TodoStateInterface) {
    const requestOptions = {
        method: 'DELETE',
    };

    const handleClick = () => {
        fetch('http://localhost:5000/todos/' + props.id, requestOptions)
    }

    return (
        <>
            <svg className='valid_svg' onClick={handleClick} width="513" height="513" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M461.647 0L143.624 349.655L51.2941 279.553H0L143.624 512.941L512.941 0H461.647Z" fill="#00FF5A" />
            </svg>
        </>
    )
} 