import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";

const useFetchImageURL = (imageName) => {

    const [imgSrc, setImgSrc] = useState('/');

    useEffect(() => {

        const fetchImage = async () => {

            try {
                const storage = getStorage();
                const response = await getDownloadURL(ref(storage, imageName));
                setImgSrc(response);
            } catch (error) {
                console.log(error);
            }
        }
        
        fetchImage();

    }, [imageName]);

    return imgSrc;
}

export default useFetchImageURL;