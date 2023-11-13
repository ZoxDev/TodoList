// Css
import '../ValidTodo/ValidTodo.css'

interface TodoStateInterface {
    id: number;
}

export default function TodoDelete(props: TodoStateInterface) {
    const requestOptions = {
        method: 'DELETE',
    };

    const handleClick = () => {
        fetch('http://localhost:5000/todos/' + props.id, requestOptions)
    }

    return (
        <>
            <svg className='valid_svg' onClick={handleClick} width="513" height="587" viewBox="0 0 513 587" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M219.832 0C179.53 0 146.555 32.9748 146.555 73.2774H73.2774C32.9748 73.2774 0 106.252 0 146.555H512.941C512.941 106.252 479.967 73.2774 439.664 73.2774H366.387C366.387 32.9748 333.412 0 293.109 0H219.832ZM73.2774 219.832V572.296C73.2774 580.357 79.1395 586.219 87.2001 586.219H426.474C434.535 586.219 440.397 580.357 440.397 572.296V219.832H367.12V476.303C367.12 496.82 350.999 512.941 330.481 512.941C309.963 512.941 293.842 496.82 293.842 476.303V219.832H220.565V476.303C220.565 496.82 204.444 512.941 183.926 512.941C163.408 512.941 147.287 496.82 147.287 476.303V219.832H74.0101H73.2774Z" fill="#FF0000" />
            </svg>
        </>
    )
} 