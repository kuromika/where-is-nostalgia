import { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import MappedImage from "./MappedImage";

const Puzzle = (props) => {
    
    const [imgSrc, setImgSrc] = useState('/');
    const [box, setBox] = useState(null);


    const updateBox = (component) => {
        setBox(component);
    }


    useEffect(() => {

        const fetchImage = async () => {

            try {
                const storage = getStorage();
                const response = await getDownloadURL(ref(storage, 'ps1-cut.png'));
                setImgSrc(response);
            } catch (error) {
                console.log(error);
            }
        }
        
        fetchImage();

    }, []);

    return (
        <div className="puzzle" style={{ position: 'relative' }}>
            <MappedImage
                src={imgSrc}
                updateBox={updateBox}
                updateOptions={props.updateOptions}
                handleGuess={props.handleGuess}
                options={props.options}
                runTimer = {props.runTimer}
            > </MappedImage>
            {box}
        </div>  
    )
}

export default Puzzle;