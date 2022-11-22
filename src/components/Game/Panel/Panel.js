import Timer from "./Timer/Timer";
import Characters from "./Characters";
import HomeButton from "../../HomeButton";

const Panel = (props) => {
    return (
        <div className="info-panel">
            <HomeButton text='home'></HomeButton>
            <Timer run={props.runTimer} setScore={props.setScore}></Timer>
            <Characters></Characters>
        </div>
    )
}
export default Panel;