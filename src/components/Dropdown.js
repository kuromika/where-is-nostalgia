import OptionButton from './OptionButton';

const Dropdown = (props) => {

    return (
        <div className="dropdown" style={props.style}>
            {props.options.map((option, index) => <OptionButton name={option.name} key={index} />)}
        </div>
    )
}

export default Dropdown;