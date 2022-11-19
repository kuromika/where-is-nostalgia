import { useEffect, useRef } from "react";
import Dropdown from './Dropdown';

const MappedImage = (props) => {

    const imageRef = useRef(null);

    useEffect(() => {

        const handleClick = (e) => {

            const rect = e.target.getBoundingClientRect();
            const scaleX = e.width / rect.width;
            const scaleY = e.height / rect.height;
            const convertedX = Math.floor((e.clientX - rect.left) * scaleX * 100);
            const convertedY = Math.floor((e.clientY - rect.top) * scaleY * 100);

            props.updateBox(
                <Dropdown
                    options={props.options}
                    style={{
                        position: 'absolute',
                        top: `${e.clientY - rect.top}px`,
                        left: `${e.clientX - rect.left}px`,
                        zIndex: 2,
                    }}
                    updateOptions={props.updateOptions}
                    updateBox={props.updateBox}
                />
            );

            props.handleGuess(convertedX, convertedY);

        }

        const image = imageRef.current;

        image.addEventListener('click', handleClick);

        return () => image.removeEventListener('click',handleClick);

    }, [props]);


    return (
        <img src={props.src} alt="puzzle" ref={imageRef}></img>
    )
}

export default MappedImage;