import { useEffect, useRef, useState } from "react";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import Dropdown from './Dropdown';
import '../styles/puzzle.css';

const Puzzle = (props) => {
    
    const [imgSrc, setImgSrc] = useState('/');
    const [box, setBox] = useState(<></>);
    const imageRef = useRef();


    const updateBox = (component) => {
        setBox(component);
    }


    useEffect(() => {

        const fetchImage = async () => {
            const storage = getStorage();
            await getDownloadURL(ref(storage, 'ps1-cut.png'))
                .then((url) => setImgSrc(url))
                    .catch(console.error);
        }
        
        fetchImage();

        
    }, []);



    useEffect(() => {

        const handleClick = (e) => {

            const rect = e.target.getBoundingClientRect();
            const scaleX = e.width / rect.width;
            const scaleY = e.height / rect.height;
            const convertedX = Math.floor((e.clientX - rect.left) * scaleX * 100);
            const convertedY = Math.floor((e.clientY - rect.top) * scaleY * 100);

            updateBox(
                <Dropdown
                    options={props.options}
                    style={{
                        position: 'absolute',
                        top: `${e.clientY - rect.top}px`,
                        left: `${e.clientX - rect.left}px`,
                        zIndex: 2,
                    }}
                    click={props.update}
                    updateBox={updateBox}
                />
            );

            props.handleGuess(convertedX, convertedY);

        }

        const image = imageRef.current;

        image.addEventListener('click', handleClick);

        return () => image.removeEventListener('click',handleClick);

    }, [props]);


    return (
        <div className="puzzle" style={{position: 'relative'}}>
            <img src={imgSrc} alt="puzzle" ref={imageRef}></img>
            {box}
        </div>
    )
}

export default Puzzle;