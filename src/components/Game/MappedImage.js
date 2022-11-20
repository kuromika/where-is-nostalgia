import { useEffect, useRef } from "react";

const MappedImage = (props) => {

    const imageRef = useRef(null);

    useEffect(() => {

        const image = imageRef.current;

        const handleLoad = (e) => {
            props.runTimer(true);
        }

        image.addEventListener('load', handleLoad);

        return () => image.removeEventListener('load', handleLoad);

    }, [props])

    useEffect(() => {

        const handleClick = (e) => {

            const rect = e.target.getBoundingClientRect();
            const scaleX = e.width / rect.width;
            const scaleY = e.height / rect.height;
            const convertedX = Math.floor((e.clientX - rect.left) * scaleX * 100);
            const convertedY = Math.floor((e.clientY - rect.top) * scaleY * 100);

            props.saveCords(convertedX, convertedY,
                e.clientY - rect.top, e.clientX - rect.left);

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