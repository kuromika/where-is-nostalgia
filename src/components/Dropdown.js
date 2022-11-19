import OptionButton from './OptionButton';

const Dropdown = (props) => {

    return (
        <div className="dropdown" style={props.style}>
            {props.options.map((option, index) => <OptionButton
                name={option} key={index} updateOptions={props.updateOptions}
                updateBox={props.updateBox} />)}
        </div>
    )
}

export default Dropdown;