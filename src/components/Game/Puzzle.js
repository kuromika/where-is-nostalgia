import useFetchImageURL from "../../hooks/useFetchImage";
import MappedImage from "./MappedImage";

const Puzzle = (props) => {

    const imgURL = useFetchImageURL('ps1-cut.png');

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