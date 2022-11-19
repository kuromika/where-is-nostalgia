import { useEffect, useRef } from "react";

const OptionButton = (props) => {

    const buttonRef = useRef();

    useEffect(() => {

        const element = buttonRef.current;

        const handleClick = (e) => {
            props.click(props.name);
            props.updateBox(<></>);
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