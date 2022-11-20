import Timer from "./Timer/Timer"
import Characters from "./Characters"

const Panel = (props) => {
    return (
         <div className="info-panel">
                <Timer run={props.runTimer}></Timer>
                <Characters></Characters>
        </div>
    )
}
export default Panel;