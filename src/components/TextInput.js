import { useEffect, useRef } from "react"

const TextInput = (props) => {

    const buttonRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {

        const buttonElement = buttonRef.current;
        const textElement = inputRef.current;

        

        const handleClick = (e) => {
            if (textElement.value.trim() !== "") {
                props.handleClick(textElement.value);
            }
        }

        buttonElement.addEventListener('click', handleClick);

        return () => buttonElement.removeEventListener('click', handleClick);

    }, [props])

    return (
        <div className="nickname-input" style={props.style}>
            <input type="text" ref={inputRef} placeholder={props.placeholder}></input>
            <button type="button" ref={buttonRef}>submit score</button>
        </div>
    )
}

export default TextInput;