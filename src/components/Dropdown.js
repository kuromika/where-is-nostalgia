import OptionButton from './OptionButton';

const Dropdown = (props) => {

    return (
        <div className="dropdown" style={props.style}>
            {props.options.map((option, index) => <OptionButton
                name={option} key={index} click={props.click}
                updateBox={props.updateBox} />)}
        </div>
    )
}

export default Dropdown;