import { useEffect, useRef } from "react";

const OptionButton = (props) => {

    const buttonRef = useRef(null);

    useEffect(() => {

        const element = buttonRef.current;

        const handleClick = (e) => {
            props.updateOptions(e.target.textContent);
            props.updateBox(null);
        }

        element.addEventListener('click', handleClick);

        return () => element.removeEventListener('click', handleClick);

    }, [props])

    return (
        <button
            type="button"
            className="option-button"
            ref={buttonRef}
        >
            {props.name}
        </button>
    );
}

export default OptionButton;