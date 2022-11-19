import { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import MappedImage from "./MappedImage";

const Puzzle = (props) => {
    
    const [imgSrc, setImgSrc] = useState('/');

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
                updateOptions={props.updateOptions}
                saveCords={props.saveCords}
                options={props.options}
                runTimer={props.runTimer}
            > </MappedImage>
            {props.children}
        </div>  
    )
}

export default Puzzle;