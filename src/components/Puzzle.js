import { useEffect, useRef, useState } from "react";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const Puzzle = (props) => {
    
    const [imgSrc, setImgSrc] = useState('/');
    const imageRef = useRef();

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
            const x = Math.floor((e.clientX - rect.left) * scaleX * 100);
            const y = Math.floor((e.clientY - rect.top) * scaleY * 100);
            props.handleGuess(x, y);
        }
        const image = imageRef.current;

        image.addEventListener('click', handleClick);

        return () => image.removeEventListener('click',handleClick);

    }, [props]);


    return (
        <div className="puzzle">
            <img style={{width: "100%"}} src={imgSrc} alt="puzzle" ref={imageRef}></img>
        </div>
    )
}

export default Puzzle;