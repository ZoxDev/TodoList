// Css
import './TodoState.css'

interface TodoStateInterface {
    id: number;
    actualstate: number;
}

export default function TodoState(props: TodoStateInterface) {

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    };

    const handleClick = () => {
        if (props.actualstate == 1) {
            fetch('http://localhost:5000/todos/' + props.id + '/todo', requestOptions)
        } else {
            fetch('http://localhost:5000/todos/' + props.id + '/doing', requestOptions)
        }
    }

    return (
        <>
            <svg onClick={handleClick} className='state_svg' width="513" height="513" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M256.471 0C114.791 0 0 114.791 0 256.471C0 398.15 114.791 512.941 256.471 512.941C398.15 512.941 512.941 398.15 512.941 256.471C512.941 114.791 398.15 0 256.471 0ZM256.471 463.302C142.196 463.302 49.6395 370.745 49.6395 256.471C49.6395 142.196 142.196 49.6395 256.471 49.6395C370.745 49.6395 463.302 142.196 463.302 256.471C463.302 370.745 370.745 463.302 256.471 463.302ZM320.382 355.336L232.582 291.529C229.376 289.15 227.514 285.427 227.514 281.497V111.689C227.514 104.863 233.099 99.279 239.924 99.279H273.017C279.843 99.279 285.427 104.863 285.427 111.689V258.229L354.509 308.489C360.093 312.522 361.231 320.278 357.198 325.863L337.755 352.647C333.722 358.128 325.966 359.369 320.382 355.336Z"
                    fill={props.actualstate ? "#00FF00" : "#FF0000"}
                />
            </svg>
        </>
    )
} 