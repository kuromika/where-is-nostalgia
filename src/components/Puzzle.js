import { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const Puzzle = () => {
    
    const [imgSrc, setImgSrc] = useState('/');

    useEffect(() => {

        const fetchImage = async () => {
            const storage = getStorage();
            await getDownloadURL(ref(storage, 'ps1-cut.png'))
                .then((url) => setImgSrc(url))
                    .catch(console.error);
        }
        
        fetchImage();
        
    }, []);


    return (
        <div className="puzzle">
            <img src={imgSrc} alt="puzzle"></img>
        </div>
    )
}

export default Puzzle;