import useFetchImageURL from "../../hooks/useFetchImageURL";
import MappedImage from "./MappedImage";

const Puzzle = (props) => {

    const imgURL = useFetchImageURL('ps1-phone.jpg');

    return (
        <div className="puzzle" style={{ position: 'relative' }}>
            <MappedImage
                src={imgURL}
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